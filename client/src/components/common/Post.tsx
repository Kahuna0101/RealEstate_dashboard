import { Box, Typography, Stack, FormControl, FormHelperText,
TextField, TextareaAutosize, Select, MenuItem,
Button } from "@pankod/refine-mui";
  
import { PostProps } from "interfaces/common";
import CustomButton from "./CustomButton";



const Post = ({ type, register, handleSubmit,
  handleImageChange, formLoading, onFinishHandler,
  postImage }: PostProps) => {

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}  color="#11142d">
        {type} a Post
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column',
          gap: '20px'}} onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
              Enter Post Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              variant="outlined"
              {...register('title', {required: true})}
            />
          </FormControl>
          <FormControl>
          <FormHelperText sx={{ fontWeight: 500,
            margin: '10px 0', fontSize: 16, color:'#11142d'}}>
              Enter Details
            </FormHelperText>
              <TextareaAutosize 
                minRows={5}
                required
                placeholder="Write Details"
                color="#6dcd00"
                style={{ width: '100%', background: 'transparent',
                fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)',
                outlineColor: "#6dcd00",
                borderRadius: 6, padding: 10, color:'#919191'}}
                {...register('body', {required: true})}
                />
          </FormControl>

          <Stack direction="row" gap={1}
              justifyContent="space-between" mb={2}>
              <Stack direction="column" gap={2}>
                <Typography fontSize={16} fontWeight={500}
                my="10px" color="#11142d">
                  Post photo
                </Typography>

                <Button component="label" sx={{ width:'fit-content', 
                color:"#2ed480", textTransform:'capitalize', fontSize: 16}}>
                  Upload *
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      //@ts-ignore
                      handleImageChange(e.target.files[0])
                    }}/>
                </Button>

                 <Typography fontSize={14} color="#808191" sx={{
                wordBreak: 'break-all'}}>
                {postImage?.name}
              </Typography>
              </Stack>

              <FormControl>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d', marginRight:"200px"}}>
                  Tags
                </FormHelperText>
                <Select
                  variant="outlined"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label':'Without label'}}
                  defaultValue="realestate"
                  {...register('tags', {required: true})}
                  >
                    <MenuItem value="promos">Promos</MenuItem>
                    <MenuItem value="realestate">RealEstate</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="motivations">Motivations</MenuItem>
                    <MenuItem value="celebrations">Celebrations</MenuItem>
                </Select>
              </FormControl>
          </Stack>

          <CustomButton 
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#6dcd00"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Post;