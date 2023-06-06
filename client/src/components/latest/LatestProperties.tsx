import { useList } from '@pankod/refine-core';
import { Box, Typography } from '@pankod/refine-mui';
import PropertyCard from 'components/common/PropertyCard';

const LatestProperties = () => {
    const { data, isLoading, isError } = useList({
        resource: 'properties',
        config: {
          pagination: {
            pageSize: 4
          }
        }
      });
    
    
      const latestProperties = data?.data ?? [];
    
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
        <Typography fontSize={18} fontWeight={600} color="#11142d">Latest Properties</Typography>
        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard 
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.images[0]}
              date={property.date}
            />
          ))}
        </Box>
      </Box>
  )
}

export default LatestProperties;