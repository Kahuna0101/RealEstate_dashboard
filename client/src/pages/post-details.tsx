import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useDelete, useShow } from '@pankod/refine-core';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { Delete, Edit, Place, LocalOffer, CalendarMonthOutlined } from '@mui/icons-material';

import { CustomButton } from 'components';

const PostDetails = () => {
  const navigate = useNavigate();
  const { queryResult } = useShow();
  const { mutate } = useDelete();
  const { id } = useParams();

  const { data, isLoading, isError } = queryResult;

  const postDetails = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const handleDeletePost = () => {
    const response = ('Are you sure you want to delete this post?');
    if (response) {
      mutate({
        resource: 'posts',
        id: id as string,
      });

      navigate('/posts');
    }
  };

  return (
    <Box
      borderRadius="15px"
      padding={{ xs: '30px', md: '20px'}}
      bgcolor="#FCFCFC"
      width="100%"
    >
        <Typography fontSize={25} fontWeight={700} color="#11142D">{`${postDetails.title} Details`}</Typography>
      
      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4} justifyContent="space-between">

        <Box flex={1} maxWidth={994}>
          <img
            src={postDetails.photo}
            alt="post_details-img"
            height={546}
            style={{ objectFit: 'cover', borderRadius: '10px' }}
            className="post_details-img"
          />

          <Box mt="15px">
            <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography fontSize={22} fontWeight={700} mt="10px" color="#11142D">{postDetails.title}</Typography>
                <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                </Stack>
              </Box>

              <Box>
              
                <Stack direction="row" alignItems="center" gap={1}>
                  <LocalOffer sx={{ fontSize: 18, color: '#11142d' }}/>
                  <Typography fontSize={25} fontWeight={700} color="#6dcd00">{postDetails.tags}</Typography>
                </Stack>
              </Box>
            </Stack>

            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt="10px">
                <Typography fontSize={18} fontWeight={400} color="#11142D">Write Up</Typography>
                  <Box display="flex" justifyContent="flex-end" fontSize={18} gap={.5}>
                    <CalendarMonthOutlined sx={{ color:"#11142D" }}/>
                    <Typography color="#808191">{postDetails.date.substring(0, 10)}</Typography>
                  </Box>
              </Box>

              <Box mt="10px">
                <Typography fontSize={14} color="#808191">
                  {postDetails.body}
                </Typography>
             </Box>
          </Box>
        </Box>

        <Box width="100%" flex={1} maxWidth={326} display="flex" flexDirection="column" gap="20px">
          <Stack
            width="100%"
            p={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid #E4E4E4"
            borderRadius={2}
          >

            <Stack mt={2} justifyContent="center" alignItems="center" textAlign="center" >
              <img
                src={postDetails.creator.avatar}
                alt="avatar"
                width={90}
                height={90}
                style={{ borderRadius: '100%', objectFit: 'cover' }}
              />

              <Box mt="15px">
                <Typography fontSize={18} fontWeight={600} color="#11142D">{postDetails.creator.name}</Typography>
                <Typography mt="5px" fontSize={14} fontWeight={400} color="#808191">Agent</Typography>
              </Box>

              <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                <Place sx={{ color: '#808191' }} />
                <Typography fontSize={14} fontWeight={400} color="#808191">Lagos, Nigeria</Typography>
              </Stack>

              <Typography mt={1} fontSize={16} fontWeight={600} color="#11142D">{postDetails.creator.allPosts.length} Posts</Typography>
            </Stack>

            <Stack width="100%" mt="25px" direction="row" flexWrap="wrap" gap={2}>
              <CustomButton
                title="Edit"
                backgroundColor="#6dcd00"
                color="#FCFCFC"
                fullWidth
                icon={<Edit />}
                handleClick={() => {navigate(`/posts/edit/${postDetails._id}`)}}
              />
              <CustomButton
                title="Delete"
                backgroundColor= "#d42e2e"
                color="#FCFCFC"
                fullWidth
                icon={<Delete />}
                handleClick={() => {handleDeletePost()}}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PostDetails;