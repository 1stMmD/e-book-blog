import { useState , useEffect , useRef} from "react"
import { getBooksByQuery } from "../functions/firestore"

const useGetBooksByQuery = (property , operator , value , LIMIT) => {
    const [data , setData] = useState([]);
    const [pending , setPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        const unsub = getBooksByQuery(
            property , operator , value , setData , setPending, setError , LIMIT
        )
        
    },[property , operator , value])

    return { data , pending , error }
}   

export default useGetBooksByQuery;