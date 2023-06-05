import { useList } from '@pankod/refine-core';
import { Box, Typography } from '@pankod/refine-mui';
import PostCard from 'components/common/PostCard';

const LatestPosts = () => {
    const { data, isLoading, isError } = useList({
        resource: 'posts',
        config: {
          pagination: {
            pageSize: 4
          }
        }
      });
    
    
      const latestPosts = data?.data ?? [];
    
      if(isLoading) return <Typography>Loading...</Typography>
      if(isError) return <Typography>Error...</Typography>

  return (
    <Box
      flex={1}
      padding={{ xs:"30px", md: '20px'}}
      borderRadius="15px"
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="column"
      minWidth="100%"
      mt="25px"
    >
        <Typography fontSize={18} fontWeight={600} color="#11142d">Latest Posts</Typography>
        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}>
            {latestPosts.map((post) => (
                <PostCard 
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    photo={post.photo}
                    body={post.body}
                    tags={post.tags}
                    date={post.date}
                />
            ))}  
        </Box>
    </Box>
  )
}

export default LatestPosts;