import { Typography, Box } from "@pankod/refine-mui";


import {
  LatestPosts,
  LatestProperties,
  PropertiesChart,
  PostsChart,
  AdminsChart,
} from 'components'

const Home = () => {

  return (
    <Box width="100%">
      <Box sx={{ textAlign: { xs:'center', md:'initial'} }}>
        <Typography fontSize={25} fontWeight={700} color='#11142D'>Dashboard</Typography>
      </Box>
      
      <Box mt="20px" display="flex"
        flexWrap="wrap" gap={4}>
        <PropertiesChart />
        <PostsChart />
        <AdminsChart />
      </Box>

      <LatestProperties />
      <LatestPosts />
      </Box>    
  )
}

export default Home