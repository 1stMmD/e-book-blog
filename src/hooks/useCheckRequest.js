import { useState , useEffect } from "react"
import { checkRequest } from '../functions/firestore';

const useCheckRequest = (uid) => {
    const [sended , setSended] = useState(null);
    const [pending , setPending] = useState(false);
    const [error , setError] = useState(null);

    useEffect(() => {
        const func = async () => {
            setSended(null)
            setPending(true)
            setError(null)
            try{
                const bool = await checkRequest(uid);
                setSended(bool)
                setPending(false)
                setError(null)
            }
            catch(err){
                setSended(null)
                setPending(false)
                setError(err.toString())
            }
        }
        func()
    },[uid])

    return {sended , pending , error}
}

export default useCheckRequest;