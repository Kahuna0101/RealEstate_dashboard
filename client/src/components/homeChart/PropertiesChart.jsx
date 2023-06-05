import { useList } from "@pankod/refine-core";
import PieChart from "components/charts/PieChart";

const PropertiesChart = () => {
    const { data, isLoading, isError } = useList({
        resource: 'properties',
    });
  
    const properties = data?.data ?? [];
  
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>

    const totalProperties = properties.length; // Get the total number of properties

  return (
    <PieChart 
        title="Number of Properties Uploaded"
        value={totalProperties}
        series={[75, 25]}
        colors={['#6dcd00', '#F45252']}
    />
  )
}

export default PropertiesChart;