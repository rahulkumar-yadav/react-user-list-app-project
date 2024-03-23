function Error({mess}) {
    return (
         <div className="flex justify-center  h-[100vh] bg-[#0c1317] items-center ">
            <div>
                <h1 className=" text-3xl font-bold text-[#9ba1a5]">
                  {mess}
                </h1>
            </div>
        </div>
           
    );
}

export default Error
