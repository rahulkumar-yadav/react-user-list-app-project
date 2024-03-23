

function User({user ,handleClick ,active2}) {
    const bg = active2 ? "bg-[#2a3942]" : "";
    function imageError(e){
        e.target.src = 'placeholderImage.png';
    }
    return (
        <li
            onClick={handleClick}
            className={`py-4 px-4 flex items-center gap-4  border-b-2  border-[#222d34] ${bg}`}>
            <img
                src={user?.avatar}
                alt="user img"
                onError={imageError}
                className=" rounded-full h-12  "
            />
            <div>
                <h3 className=" font-semibold">
                    {`${user.profile.firstName} ${user.profile.lastName}`}
                </h3>
                <p className=" text-xs mt-1">{user.jobTitle}</p>
            </div>
        </li>
    );
}

export default User
