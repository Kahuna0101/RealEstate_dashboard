import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography, TextField, Select, MenuItem } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

import { PostCard, CustomButton } from "components";

const AllPosts = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    filters, setFilters,
  } = useTable();

  const allPosts = data?.data ?? [];

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) => ('field' in item ? item : []));

    return {
      title: logicalFilters.find((item) => item.field === 'title')?.value || '',
      tags: logicalFilters.find((item) => item.field === 'tags')?.value || '',
    };
  }, [filters]);

  if(isLoading) return <Typography>Loading...</Typography>;
  if(isError) return <Typography>Error...</Typography>;

  return (
    <Box >
      <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }} padding={{ xs: '30px', md: '20px'}}>
        <Stack direction="column" width="100%">
          <Box sx={{ textAlign: { xs:'center', md:'initial'} }}>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allPosts.length? 'There are no posts' : 'All Posts'}
          </Typography>
          </Box>
          
          <Box mb={2} mt={3} display="flex" width="100%" justifyContent={{ xs: 'center', md: 'space-between'}} flexWrap="wrap" >
            <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs: '20px', sm: 0 }} justifyContent={{ xs: 'center', md: 'space-between'}}>
              <TextField
                variant="outlined"
                placeholder="Search by title"
                value={currentFilterValues.title}
                onChange={(e) => {
                  setFilters([
                    {
                      field: 'title',
                      operator: 'contains',
                      value: e.currentTarget.value ? e.currentTarget.value : undefined,
                    },
                  ]);
                }}
              />
              <Select 
                variant="outlined"
                displayEmpty
                required
                inputProps={{ 'aria-label' : 'without label'}}
                defaultValue=""
                value={currentFilterValues.tags}
                onChange={(e) =>
                  setFilters([
                    {
                      field: 'tags',
                      operator: 'eq',
                      value: e.target.value,
                    },
                  ], 'replace'
                  )}
                >
                  <MenuItem value="">All</MenuItem>
                  {['Promos', 'RealEstate', 'Business', 'Motivations', 'Celebrations'].map((type) => (
                    <MenuItem key={type} value={type.toLowerCase()}>{type}</MenuItem>
                  ))}
              </Select>
            </Box>
            <CustomButton
              title="Add Posts"
              handleClick={() => navigate('/posts/create')}
              backgroundColor="#6dcd00"
              color="#fcfcfc"
              icon={<Add />}
          />
          </Box>
        </Stack>

         {allPosts?.map((post) => (
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
          
      {allPosts.length ? (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
        <CustomButton
          title= "Previous"
          handleClick={() => setCurrent((prev) => prev -1)}
          backgroundColor="#6dcd00"
          color="#fcfcfc"
          disabled={!(current > 1)}
        />
        <Box display={{ xs: 'hidden', sm: 'flex' }} alignItems="center" gap="5px">
          Page{' '}<strong>{current} of {pageCount}</strong>
        </Box>
        <CustomButton
          title= "Next"
          handleClick={() => setCurrent((prev) => prev +1)}
          backgroundColor="#6dcd00"
          color="#fcfcfc"
          disabled={current === pageCount}
        />
        <Select 
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ 'aria-label' : 'without label'}}
            defaultValue={10}
            onChange={(e) => setPageSize(e.target.value ? Number(e.target.value) : 10)}
          >
            {[12, 24, 36, 48, 60].map((size) => (
              <MenuItem key={size} value={size}>Show{size}</MenuItem>
            ))}  
              </Select>
      </Box>
      ) : null }
    </Box>
  );
};
  
export default AllPosts;