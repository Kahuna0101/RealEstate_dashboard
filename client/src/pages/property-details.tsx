import { Typography, Box, Stack, Grid } from '@pankod/refine-mui';
import { useDelete, useShow } from '@pankod/refine-core';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { BedOutlined, Delete, Edit, House, Place, ShowerOutlined, SquareFoot, Star } from '@mui/icons-material';

import { AdditionalFees, CustomButton, ThumbnailSlider } from 'components';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { queryResult } = useShow();
  const { mutate } = useDelete();
  const { id } = useParams();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const video = propertyDetails.video.slice(-11)

  const handleDeleteProperty = () => {
    const response = ('Are you sure you want to delete this property?');
    if (response) {
      mutate({
        resource: 'properties',
        id: id as string,
      });

      navigate('/properties');
    }
  };

  return (
    <Box
      borderRadius="15px"
      padding={{ xs: '30px', md: '20px'}}
      bgcolor="#FCFCFC"
    >
      <Stack direction="row" gap={3} alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142D">{`${propertyDetails.title} Details`}</Typography>
        <Box sx={{ backgroundColor: propertyDetails.propertyStatus === "forsale" ? "#6dcd00" : "#d42e2e" , padding: '5px', color: "#fff",
         textTransform: 'capitalize', fontSize: 20, fontWeight: 600, borderRadius: '5px' }}>
          {propertyDetails.propertyStatus}
        </Box>
      </Stack>
      

      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4} width="100%">

        <Box flex={1} width={{ xs:530, md:964}}>
            <ThumbnailSlider images={propertyDetails.images} />
          <Box mt="15px">
            <Stack direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center">
            
            {propertyDetails.propertyType === "land" ? 
              <Typography fontSize={20} fontWeight={700} color="#11142D" textTransform="uppercase">{propertyDetails.propertyType}</Typography>
            : <Typography fontSize={20} fontWeight={700} color="#11142D" textTransform="uppercase">{propertyDetails.propertyType}</Typography>
            }
            
            {propertyDetails.propertyType === "land" ? 
            <Stack direction="row" alignItems="center" color="#11142D" gap={2}>
              <Stack direction="row" gap={0.5} alignItems="center">
                <House sx={{ color: '#6dcd00', fontSize: 40 }} />
                <Typography fontSize={20} fontWeight={600} textTransform="capitalize">{propertyDetails.gateHouse}</Typography>
              </Stack>
              <Stack direction="row" gap={0.5} alignItems="center">
                <SquareFoot sx={{ color: '#6dcd00', fontSize: 40 }} />
                <Typography fontSize={20} fontWeight={600} textTransform="capitalize">{propertyDetails.area}sqft</Typography>
              </Stack>
            </Stack>
              
            : 
            <Stack direction="row" alignItems="center" color="#11142D" gap={2}>
              <Stack direction="row" gap={0.5} alignItems="center">
                <SquareFoot sx={{ color: '#6dcd00', fontSize: 40 }} />
                <Typography fontSize={20} fontWeight={600} textTransform="capitalize">{propertyDetails.area} sqft</Typography>
              </Stack>
              <Stack direction="row" gap={0.5} alignItems="center">
                <BedOutlined sx={{ color: '#6dcd00', fontSize: 40 }} />
                <Typography fontSize={20} fontWeight={600} textTransform="capitalize">{propertyDetails.rooms} Beds</Typography>
              </Stack>
              <Stack direction="row" gap={0.5} alignItems="center">
                <ShowerOutlined sx={{ color: '#6dcd00', fontSize: 40 }} />
                <Typography fontSize={20} fontWeight={600} textTransform="capitalize">{propertyDetails.rooms} Baths</Typography>
              </Stack>
            </Stack>
            }
              <Box>
                {[1, 2, 3, 4, 5].map((item) => <Star key={`star-${item}`} sx={{ color: '#F2C94C' }} />)}
              </Box>
            </Stack>

            <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" gap={2}>
              <Box>
                <Typography fontSize={22} fontWeight={600} mt="10px" color="#11142D">{propertyDetails.title}</Typography>
                <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                  <Place sx={{ color: '#808191' }} />
                  <Typography fontSize={15} color="#808191">{propertyDetails.location}</Typography>
                </Stack>
              </Box>

              <Box>
                <Typography fontSize={16} fontWeight={600} mt="10px" color="#11142D">Price</Typography>
                <Stack direction="row" alignItems="flex-end" gap={1}>
                  <Typography fontSize={25} fontWeight={700} color="#6dcd00">₦ {propertyDetails.price}</Typography>
                  <Typography fontSize={14} color="#808191" mb={0.5}>per Plot</Typography>
                </Stack>
              </Box>
            </Stack>

              <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt="10px">
                <Typography fontSize={18} fontWeight={500} color="#11142D">Description</Typography>
                  <Box display="flex" justifyContent="flex-end">
                    <Typography color="#11142D" fontSize={18} fontWeight={500}>Created:</Typography>
                    <Typography color="#808191" fontSize={18} fontWeight={500}>{propertyDetails.date.substring(0, 10)}</Typography>
                  </Box>
              </Box>

              <Box mt="10px">
                <Typography fontSize={14} color="#808191">
                  {propertyDetails.description}
                </Typography>
             </Box>

          </Box>
        </Box>

        <Box width="100%" flex={1} display="flex" flexDirection={{ xs: "column-reverse", md:"column" }} gap="20px">
          <Stack
            width="100%"
            p={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid #E4E4E4"
            borderRadius={2}
          >

            <Stack mt={2} justifyContent="center" alignItems="center" textAlign="center">
              <img
                src={propertyDetails.creator.avatar}
                alt="avatar"
                width={90}
                height={90}
                style={{ borderRadius: '100%', objectFit: 'cover' }}
              />

              <Box mt="15px">
                <Typography fontSize={18} fontWeight={600} color="#11142D">{propertyDetails.creator.name}</Typography>
                <Typography mt="5px" fontSize={14} fontWeight={400} color="#808191">Agent</Typography>
              </Box>

              <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                <Place sx={{ color: '#808191' }} />
                <Typography fontSize={14} fontWeight={400} color="#808191">Lagos, Nigeria</Typography>
              </Stack>

              <Typography mt={1} fontSize={16} fontWeight={600} color="#11142D">{propertyDetails.creator.allProperties.length} Properties</Typography>
            </Stack>

            <Stack width="100%" mt="25px" direction="row" flexWrap="wrap" gap={2}>
              <CustomButton
                title="Edit"
                backgroundColor="#6dcd00"
                color="#FCFCFC"
                fullWidth
                icon={<Edit />}
                handleClick={() => {navigate(`/properties/edit/${propertyDetails._id}`)}}
              />
              <CustomButton
                title= "Delete"
                backgroundColor= "#d42e2e"
                color="#FCFCFC"
                fullWidth
                icon={<Delete />}
                handleClick={() => {handleDeleteProperty()}}
              />
            </Stack>
          </Stack>

          {propertyDetails.propertyType === "land" ?
          <Stack 
            width="100%"
            p={2}
            direction="column"
            border="1px solid #E4E4E4"
            borderRadius={2}
          >
            <Typography fontSize={20} fontWeight={700} color="#11142D">Additional Fees</Typography>
            <AdditionalFees propertyDetails={propertyDetails}/>
          </Stack>
          :
          ''
          }
          
        </Box>
      </Box>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} sm={6}>
            <Typography fontSize={18} fontWeight={500} color="#11142D" mb={1}>Estate Video</Typography>
            <Box>
              <iframe
                width="100%"
                height="450px"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography fontSize={18} fontWeight={500} color="#11142D" mb={1}>3D Virtual Walkthrough</Typography>
            <Box>
              <iframe
                width="100%"
                height="450px"
                src="https://www.google.com/maps/embed?pb=!4v1685540158548!6m8!1m7!1sCAoSLEFGMVFpcE05b3B4YkpYRkNXYVN6aUg2N2J4TlpwNFNhZEpwN0g1ajFfbU5T!2m2!1d6.736530799327855!2d3.061196100068131!3f66.78!4f-12.340000000000003!5f0.7820865974627469"
                title="3D Panorama"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Box>
          </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyDetails;