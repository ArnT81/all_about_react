import { useState, useEffect } from 'react'


export default function Fetch(uri, method, body) {
    const [data, setData] = useState();

    useEffect(() => {
        getData()
        return () => getData()
    },[])

    async function getData() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        let otherParams = {
            method,
            headers,
            body
        }

        try {
            const response = await fetch(uri, otherParams)
            const json = await response.json()
            setData(json)
            console.log(json);
        }
        catch (error) {
            console.log(error);
        }
    }
    return data;
}