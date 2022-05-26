import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

    }, [])

    return [token, setToken];
}

export default useToken;