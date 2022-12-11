import { useState, useEffect, useContext } from "react"
import { Context } from "../context/uiContext"

const useProducts = () => {


    const {theme, displaySidebar} = useContext(Context)
    

    const [numberOfPages, setNumberOfPages] = useState()

    const [selectedPage, setselectedPage] = useState(1)

    const [numberOfProducts, setNumberOfProducts] = useState(0)



    const paginaitonStyles = {
        margin: '4rem 0rem',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-text':{
            color: theme === '#fff' ? 'black' : 'white',
        },
        '& .Mui-selected':{
            backgroundColor: theme === '#fff' ? '' : 'black'
        }

    }

    const getNumberOfProducts = ({number}) => {
        setNumberOfProducts(number)
    }

    const getNumberOfPages = ({number}) => {
        setNumberOfPages(number)
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0
        })
    },[selectedPage])


    return [
            numberOfPages,
            getNumberOfPages,
            selectedPage, 
            setselectedPage,
            numberOfProducts,
            getNumberOfProducts,
            paginaitonStyles
        ]

}

export default useProducts