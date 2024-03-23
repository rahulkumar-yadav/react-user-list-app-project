import { useSearchParams } from "react-router-dom";

function UserDetails({ data }) {
    const [searchParams] = useSearchParams();
    const selectedUser = searchParams.get("selectedUser") || "not";
    const user = data[+selectedUser];
    function imageError(e) {
        e.target.src = "placeholderImage.png";
    }
    return (
        <div className=" col-span-2  overflow-hidden bg-[#222e358a]">
            <h3 className="font-bold bg-[#202c33] text-center h-14 p-3 text-lg ">
                User Details
            </h3>
            <div className=" h-full ">
                {selectedUser == "not" ? (
                    <h1 className=" text-center mt-[50%]">
                        Pleace select any user view details
                    </h1>
                ) : (
                    <div className=" flex flex-col items-center p-8">
                        <img
                            src={user.avatar}
                            alt={` use img ${user.profile.username} `}
                            onError={imageError}
                            className="h-48 rounded-full "
                        />
                        <h7 className="pt-3 pb-4">@{user.profile.username}</h7>
                        <div className="grid  gap-3 w-4/5">
                            <div>
                                <h4 className="p-2 font-semibold">About</h4>
                                <p className="flex  text-base font-semibold gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#2a3942] ">
                                    {user.Bio}
                                </p>
                            </div>
                            <div className=" grid grid-cols-2 gap-6  ">
                                <div>
                                    <h4 className="p-2 font-semibold">
                                        First Name
                                    </h4>
                                    <p className="flex  text-base font-semibold gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#2a3942] ">
                                        {user.profile.firstName}
                                    </p>
                                </div>{" "}
                                <div>
                                    <h4 className="p-2 font-semibold">
                                        Last Name
                                    </h4>
                                    <p className="flex  text-base font-semibold gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#2a3942] ">
                                        {user.profile.lastName}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="p-2 font-semibold">Title</h4>
                                <p className="flex  text-base font-semibold gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#2a3942] ">
                                    {user.jobTitle}
                                </p>
                            </div>
                            <div>
                                <h4 className="p-2 font-semibold">Email</h4>
                                <p className="flex  text-base font-semibold gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#2a3942] ">
                                    {user.profile.email}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserDetails;
