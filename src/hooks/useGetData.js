import { useEffect, useState } from "react";

export default function useGetData(){
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    useEffect(()=>{

        (async function(){
            
            try{
            setIsLoading(true);
            setError('');
            const res = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users ');
               
                // console.log(res)
            if(!res.ok){

                throw new Error('unable to get data');
            }
        
        const result = await res.json();
        setData(result);
            
        } catch(err){
                // console.log(err)

            setError(err)
        }finally{
            setIsLoading(false)
            // console.log(data)
        }
    })()
   } ,[] )
    return {data, isLoading ,error}
}