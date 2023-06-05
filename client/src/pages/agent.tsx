import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";

const Agent = () => {
  const { data, isLoading, isError } = useList({
      resource: 'users',
  });

  const allAdmins = data?.data ?? [];

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error...</div>

  return (
    <Box>
      <Box sx={{ textAlign: { xs:'center', md:'initial'} }}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">Admins List</Typography>
      </Box>
      

      <Box mt="20px" sx={{ display: 'flex', flexWrap:'wrap',
        gap:'20px', backgroundColor:'#fcfcfc', padding: '10px'}}
      >
        {allAdmins.map((agent) => (
          <AgentCard 
          key={agent._id}
          id={agent._id}
          name={agent.name}
          email={agent.email}
          avatar={agent.avatar}
          noOfProperties={agent.allProperties.length}
          noOfPosts={agent.allPosts.length}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Agent