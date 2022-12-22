import { useEffect, useState } from "react"

const useSlider = url => {

    const [data, setData] = useState([])

    useEffect(()=> {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.record.products))
    }, [])

    return data

}


export default useSlider