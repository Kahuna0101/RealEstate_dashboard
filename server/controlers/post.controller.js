import mongoose from "mongoose";
import Post from "../mongodb/models/post.js";
import User from "../mongodb/models/user.js";

import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const getAllPosts = async (req, res) => {
    const { _end, _order, _start, _sort, title_like = "", tags = "" } = req.query;

    const query = {};

    if(tags !== '') {
        query.tags = tags;
    }

    if(title_like) {
        query.title = { $regex: title_like, $option: 'i' };
    }

    try {
        const count = await Post.countDocuments({ query });

        const posts = await Post
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order })

        res.header('x-total-count', count);
        res.header('Access-Control-Expose-Headers', 'x-total-count');

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getPostDetail = async (req, res) => {
    const { id } = req.params;
    const postExists = await Post.findOne({ _id: id }).populate('creator');

    if(postExists) {
        res.status(200).json(postExists)
    }   else {
        res.status(400).json({ message: 'Post not found' });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, body, photo, tags, email } = req.body;
    
        // Start a new session
        const session = await mongoose.startSession();
        session.startTransaction();
        
        
        const user = await User.findOne({ email }).session(session);
    
        if(!user) throw new Error('User not found');
    
        const photoUrl = await cloudinary.uploader.upload(photo);
        
        // Create a new post
        const newPost = await Post.create({
            title,
            body,
            tags,
            photo: photoUrl.url,
            creator: user._id
        });
        
        // Update the user's allPosts field with the new post
        user.allPosts.push(newPost._id);
        await user.save({ session });
        
        // Commit the transaction
        await session.commitTransaction();
        
        // Send response
        res.status(200).json({ message: 'Post created succesfully' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body, photo, tags } = req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        await Post.findByIdAndUpdate({ _id: id}, {
            title,
            body,
            tags,
            photo: photoUrl.url || photo
        })

        res.status(200).json({ message: 'Post updated successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const deletePost = async (req, res) => {
    let postToDelete;
    try {
      const { id } = req.params;
      postToDelete = await Post.findById({ _id: id });
  
      if (!postToDelete) {
        throw new Error('Post not found');
      }
  
      postToDelete.deleteOne()
      res.status(200).json({ message: 'Post deleted successfully', postToDelete });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export {
    getAllPosts,
    getPostDetail,
    createPost,
    updatePost,
    deletePost,
}