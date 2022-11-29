import { useState , useEffect } from "react"
import { getBooksByQuery } from "../functions/firestore"

const useGetBooksByQuery = (property , operator , value) => {
    const [data , setData] = useState(null);
    const [pending , setPending] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
        const func = async () => {
            setPending(true)
            setError("")
            setData([])
            try{
                const arr = await getBooksByQuery(property , operator , value);
                setData(arr)
                setPending(false)
                setError("")
            }
            catch(err){
                setData([])
                setPending(false)
                setError(err.toString())
            }
        }
        func()
    },[property , operator , value])

    return { data , pending , error }
}   

export default useGetBooksByQuery;