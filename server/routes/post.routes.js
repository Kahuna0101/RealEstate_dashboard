import express from 'express';

//IMPORT ALL THE CONTROLLERS ...

import { getAllPosts, getPostDetail, createPost, updatePost, deletePost, } from '../controllers/post.controller.js';

const router = express.Router();

router.route('/').get(getAllPosts);
router.route('/:id').get(getPostDetail);
router.route('/').post(createPost);
router.route('/:id').patch(updatePost);
router.route('/:id').delete(deletePost);

export default router;