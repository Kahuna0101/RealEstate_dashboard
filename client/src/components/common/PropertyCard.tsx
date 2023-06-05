import { Place, CalendarMonthOutlined } from '@mui/icons-material';
import { Link } from '@pankod/refine-react-router-v6';
import { Typography, Box, Card, CardMedia, CardContent, Stack} from '@pankod/refine-mui';

import { PropertyCardProps } from 'interfaces/property';

const PropertyCard = ({ id, title, location, price, photo, date }: PropertyCardProps) => {
  return (
    <Card 
      component={Link} to={`/properties/show/${id}`}
      sx={{ 
        maxWidth: '330px', padding: '10px', width: '100%',
      '&:hover': {boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)'},
      cursor: 'pointer'
      }}
      elevation={0}
      >
        <CardMedia 
          component="img"
          width="100%"
          height={210}
          image={photo}
          alt="card image"
          sx={{ borderRadius: '10px' }}
          />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          gap: '10px', paddingX: '5px' }}>
          <Stack direction="row" gap={1} justifyContent="space-between">
            <Typography fontSize={16} fontWeight={500}
            color="#11142d">{title}</Typography>
            <Stack direction="row" gap={0.5} alignItems="flex-start">
              <Place sx={{ fontSize: 18, color: '#11142d', marginTop: 0.5 }}/>
              <Typography fontSize={14} color="#808191">{location}</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" gap={1} justifyContent="space-between">
          <Box px={1.5} py={0.5} borderRadius={1}
            bgcolor="#e4e4e4" height="fit-content">
            <Typography fontSize={15} fontWeight={600}
            color="#5fb300">₦ {price}</Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" fontSize={18} gap={.5}>
            <CalendarMonthOutlined sx={{ color:"#11142D" }}/>
          <Typography color="#808191">{date.substring(0, 10)}</Typography>
          </Box>
          </Stack>
        </CardContent>
    </Card>
  )
}
export default PropertyCard;