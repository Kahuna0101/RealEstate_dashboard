import { LocalOffer, ReadMore, CalendarMonthOutlined } from '@mui/icons-material';
import { Link } from '@pankod/refine-react-router-v6';
import { Typography, Box, Card, CardMedia, CardContent, Stack, Tooltip, Button, borderColor} from '@pankod/refine-mui';

import { PostCardProps } from 'interfaces/post';

const PostCard = ({ id, title, body, tags, photo, date }: PostCardProps) => {
  return (
    <Card 
    component={Link} to={`/posts/show/${id}`}
    sx={{ 
      maxWidth: '330px', padding: '10px',
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
      <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
        gap: '10px', paddingX: '5px' }}>
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500}
          color="#11142d">{title}</Typography>
          <Stack direction="row" gap={0.7} alignItems="center">
            <Tooltip title={body}>
               <Button>Details <ReadMore sx={{ fontSize: 18, color: '#11142d', marginTop: 0.5, marginLeft: 0.5 }}/></Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack gap={2}>
        <Box px={1.5} py={0.5} borderRadius={1}
          bgcolor="#e4e4e4" height="fit-content">
            <Stack direction="row" gap={0.5} alignItems="center">
              <LocalOffer sx={{ fontSize: 18, color: '#11142d' }}/>
              <Typography fontSize={15} fontWeight={600}
              color="#5fb300">{tags}</Typography>
          </Stack>
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

export default PostCard;