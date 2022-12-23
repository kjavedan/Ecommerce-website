import { useEffect, useState } from "react"

const useSlider = url => {

    const [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    console.log(url)
    
    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.record.products))
            setIsLoading(false)
    }, [])

    return [data, isLoading]

}


export default useSlider