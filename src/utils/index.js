import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {

        let canceled = false;

        setIsLoading(true);
        setIsError(null);
        setData(null);

        fetch(url)
            .then(res => res.json())
            .then(resData => { if (!canceled) setData(resData) })
            .catch(e => { if (!canceled) setIsError(e) })
            .finally(() => { if (!canceled) setIsLoading(false) });
            return () => {
                canceled = true
            }

    }, [url]);

    return [data, isLoading, isError]
}


export function useDebounce(search, delay = 300) {
    search = search.trim();
    const [debouce, setDebounce] = useState(search);

    useEffect(() => {
            const handler = setTimeout(()=> { setDebounce(search) }, delay );
            return () => clearTimeout(handler)

    }, [search, delay])

   return debouce
    
}

//** */


