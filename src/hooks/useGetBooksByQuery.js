import { useState , useEffect , useRef} from "react"
import { getBooksByQuery } from "../functions/firestore"

const useGetBooksByQuery = (property , operator , value) => {
    const [data , setData] = useState(null);
    const [pending , setPending] = useState(null);
    const [error , setError] = useState(null);

    useEffect(() => {
        const unsubscribe = getBooksByQuery(
            property , operator , value , setData , setPending, setError
        )
    },[property , operator , value])

    return { data , pending , error }
}   

export default useGetBooksByQuery;