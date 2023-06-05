import React, { useState } from "react";
import { Box, Typography, Stack, FormControl, FormHelperText, TextField, TextareaAutosize, Select, MenuItem, Button } from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImages }: FormProps) => {

  const [propertyType, setPropertyType] = useState('land');

  const showAdditionalFees = propertyType !== 'house';

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}
        color="#11142d">
        {type} a property
      </Typography>
      <Box mt={2.5} borderRadius="15px"
        padding="20px" bgcolor="#fcfcfc">
        <form 
          style={{ marginTop: '20px', width: '100%',
                   display:'flex', flexDirection:'column', gap:'20px'
                }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500,
            margin: '10px 0', fontSize: 16, color:'#11142d'}}>
              Enter property name
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
              Enter Description
            </FormHelperText>
              <TextareaAutosize 
                minRows={5}
                required
                placeholder="Write Description"
                color="#6dcd00"
                style={{ width: '100%', background: 'transparent',
                fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)',
                outlineColor: "#6dcd00",
                borderRadius: 6, padding: 10, color:'#919191'}}
                {...register('description', {required: true})}
                />
          </FormControl>

          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}}  gap={4}>
              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d'
                }}>
                  Select Property Type
                </FormHelperText>
                <Select
                  variant="outlined"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label':'Without label'}}
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <MenuItem value="land">Land</MenuItem>
                  <MenuItem value="apartment">Apartment</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d'
                }}>
                  Select Property Status
                </FormHelperText>
                <Select
                  variant="outlined"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label':'Without label'}}
                  defaultValue="forsale"
                  {...register('propertyStatus', {required: true})}
                  >
                    <MenuItem value="for-sale">For Sale</MenuItem>
                    <MenuItem value="sold">Sold</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Enter property price (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('price', {required: true})}
                />
              </FormControl>
          </Stack>
          
          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}} gap={3} >
              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Gate House
                </FormHelperText>
                <Select
                  variant="outlined"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label':'Without label'}}
                  defaultValue="yes"
                  {...register('gateHouse', {required: true})}
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Size per plot (Sqm)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  {...register('area', {required: true})}
                />
              </FormControl>
              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Number of Rooms
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  placeholder="If Land input 0"
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  {...register('rooms', {required: true})}
                />
              </FormControl>
              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Number of Bath Rooms
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  placeholder="If Land input 0"
                  id="outlined-basic"
                  type="number"
                  variant="outlined"
                  {...register('baths', {required: true})}
                />
              </FormControl>
          </Stack>

              <FormControl>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Enter Location
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  variant="outlined"
                  {...register('location', {required: true})}
                />
              </FormControl>

              <FormControl>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Enter YouTube Video link of the Property
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  variant="outlined"
                  {...register('video', {required: true})}
                />
              </FormControl>

              <FormControl>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Enter 3D link of the Property
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  variant="outlined"
                  {...register('panorama', {required: true})}
                />
              </FormControl>
          
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
              <Stack direction="row" gap={2}>
                <Typography fontSize={16} fontWeight={500}
                my="10px" color="#11142d">
                  Property photo
                </Typography>

                <Button component="label" sx={{ width:'fit-content', 
                color:"#2ed480", textTransform:'capitalize', fontSize: 16}}>
                  Upload *
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    multiple
                    onChange={(e) => handleImageChange(e.target.files)}
                  />
                </Button>

                {type && type === 'Edit' && (
                  <Typography fontSize={15} fontWeight={200}
                    my="10px" color="#11142d">
                    Note: New photos upload overwrite previous ones
                  </Typography>
                )}
              </Stack>
             

              {propertyImages && propertyImages.length > 0 && (
                <Stack direction="row" alignItems="center">
                  <Typography fontSize={14} color="#6B7280" sx={{ marginRight: '5px' }}>Images:</Typography>
                  <Typography fontSize={14} color="#808191" sx={{ wordBreak: 'break-all' }}>
                    {propertyImages.map((image) => image.name).join(', ')}
                  </Typography>
                </Stack>
              )}
          </Stack>

          
          {showAdditionalFees && (
          <Box>
          <Typography fontSize={25} fontWeight={700} color="#11142d">Additional Fees</Typography>
          
          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}} gap={4}>
              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Legal Documentation (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('legalDoc', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Structural Drawing (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('structuralDrawing', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Survey Plan (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('surveyPrice', {required: true})}
                />
              </FormControl>
          </Stack>

          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}} gap={4}>
              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Stage Certification Fee (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('certificationFee', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Infrastructure/Development Fee (₦)
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('devFee', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Mechanical & Electrical Drawing (₦) - Duplex
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('meFeeDuplex', {required: true})}
                />
              </FormControl>
          </Stack>

          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}} gap={4}>
              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Mechanical & Electrical Drawing (₦) - Bungalow
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('meFeeBungalow', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Architectural Drawing (₦) - Duplex
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('archFeeDuplex', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
                <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Architectural Drawing (₦) - Bungalow
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('archFeeBungalow', {required: true})}
                />
              </FormControl>
          </Stack>

          <Stack sx={{ flexDirection:{xs:"column", md:"row"}}} gap={4}>
              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Building Approval (₦) - Duplex
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('approvalDuplex', {required: true})}
                />
              </FormControl>

              <FormControl sx={{ flex: 1}}>
              <FormHelperText sx={{ fontWeight: 500,
                  margin: '10px 0', fontSize: 16, color:'#11142d'}}>
                  Building Approval (₦) - Bungalow
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"                  type="number"
                  variant="outlined"
                  {...register('approvalBungalow', {required: true})}
                />
              </FormControl>
          </Stack>
          </Box>
          )}

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

export default Form;