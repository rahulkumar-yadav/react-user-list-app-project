
import useGetData from "../hooks/useGetData";
import Spinner from "../ui/Spinner";
import Users from "../ui/Users";
import Error from "../ui/Error";
import UserDetails from "../ui/UserDetails";

function Home() {
   const {data, isLoading, error} = useGetData();
   
   if(isLoading) return <Spinner/>
   if (error) return <Error mess={error.message}/>;
   if (!data.length) return <Error mess={'no data to display'} />;

    return (
        <div className="  h-[100vh] bg-[#0c1317]   ">
            <div className="max-w-[1200px] h-screen mx-auto py-10 grid  grid-cols-3 grid-rows-1 justify-center text-[#9ba1a5] ">
                <Users data={data} />

                <UserDetails data={data} />
            </div>
        </div>
    );
}

export default Home
