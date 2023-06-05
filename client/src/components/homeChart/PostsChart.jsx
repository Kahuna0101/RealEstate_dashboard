import { useList } from "@pankod/refine-core";
import PieChart from "components/charts/PieChart";

const PostsChart = () => {
    const { data, isLoading, isError } = useList({
        resource: 'posts',
    });
  
    const posts = data?.data ?? [];
  
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>

    const totalPosts = posts.length; // Get the total number of posts

  return (
    <PieChart 
        title="Number of Posts Uploaded"
        value={totalPosts}
        series={[75, 25]}
        colors={['#6dcd00', '#F45252']}
    />
  )
}

export default PostsChart;