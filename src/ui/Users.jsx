
import User from "./user";
import { useSearchParams } from "react-router-dom";

function Users({data}) {
    const [searchParam,setSearchParam] = useSearchParams();
    const selectUser = searchParam.get('selectedUser') || 'sd';
    
    function handleClick(ind){
        searchParam.set('selectedUser',ind)
        setSearchParam(searchParam);
    }
    return (
        <div className=" col-span-1 border-r-2  border-[#222d34] overflow-hidden">
            <h3 className=" font-bold bg-[#202c33] text-center h-14 p-3 text-lg">
                User
            </h3>
            <ul className="bg-[#111b21] max-h-[95%] overflow-scroll hid-scrollbar pb-3 ">
                {data &&
                    data.map((user, index) => (
                        <User
                            key={index}
                            user={user}
                            handleClick={() => handleClick(index)}
                            active2={+selectUser === index}
                        />
                    ))}
            </ul>
        </div>
    );
}

export default Users
