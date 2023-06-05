import { Box, Typography } from "@pankod/refine-mui"


const AdditionalFees = ({ propertyDetails }) => {
  return (
    <Box fontSize={50}>
            <Box display="flex" flexDirection="row" gap={1} mt={4}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Legal Documentation:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.legalDoc}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Structural drawing:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.structuralDrawing}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Survey Plan:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.surveyPrice}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Stage Certification Fee:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.certificationFee}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Infrastructure/Development Fee:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.devFee}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">M & E Drawing - Duplex:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.meFeeDuplex}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">M & E Drawing - Bungalow:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.meFeeBungalow}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Architectural Drawing - Duplex:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.archFeeDuplex}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Architectural Drawing - Bungalow:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.archFeeBungalow}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Building Approval - Duplex:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.approvalDuplex}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={1} mt={2}>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#11142D">Building Approval - Bungalow:</Typography>
              <Typography fontSize={{ xs: 13, md: 18 }} fontWeight={500} color="#808191">₦ {propertyDetails.approvalBungalow}</Typography>
            </Box>
    </Box>
  )
}

export default AdditionalFees