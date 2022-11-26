import { useState , useEffect } from "react";
import axios from "axios";
const useAxios = (url) => {
    const [data , setData] = useState("")
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState("");

    useEffect(() => {
        
        axios.get(`http://localhost:4000${url ? url : ""}`)
        .then((data) => {
            setData(data.data)
            setIsPending(false)
            setError("")
        })
        .catch((err) => {
            setData("")
            setIsPending(false)
            setError(err)
        })
    },[url])

    return {data , isPending , error};
}

export default useAxios;