import { useList } from "@pankod/refine-core";
import PieChart from "components/charts/PieChart";

const AdminsChart = () => {
    const { data, isLoading, isError } = useList({
        resource: 'users',
    });
  
    const users = data?.data ?? [];
  
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>

    const totalUsers = users.length; // Get the total number of users

  return (
    <PieChart 
        title="Number of Admins"
        value={totalUsers}
        series={[75, 25]}
        colors={['#6dcd00', '#F45252']}
    />
  )
}

export default AdminsChart;