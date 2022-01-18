import {useState} from "react";

export async function useFetch(url, params) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('loading');
    const [error, setError] = useState(null);

    try {
        if(!params) {
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error('Ups, server is not working now')
            }

            const data = await response.json()
            setData(data)
            setStatus('success')
        } else {
            await fetch(url, params)
        }
    } catch (e) {
        setError(e)
        setStatus('error')
    }

   return {
       data,
       status,
       error
   }
}