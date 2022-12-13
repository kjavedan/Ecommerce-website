import { useState, useEffect, useContext } from "react"
import { Context } from "../context/uiContext"

const useProducts = (url) => {

    
    const {theme} = useContext(Context)
    
    const [productsData, setProductsData] = useState([])
    
    const[isLoading, setIsLoading] = useState(true)
    
    const [selectedPage, setselectedPage] = useState(1)
    
    const [numberOfProducts, setNumberOfProducts] = useState(0)
    
    const [numberOfPages, setNumberOfPages] = useState(0)

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
  
    useEffect(()=> {
        setNumberOfProducts(productsData.length)
        setNumberOfPages(Math.ceil(numberOfProducts / 20))
    })

    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0
        })
    },[selectedPage])

    // useEffect(()=> {
    //     fetch('https://raw.githubusercontent.com/kjavedan/mockJson/main/.mockend.json')
    //       .then(res => res.json())
    //       .then(data => setProductsData(data.Brands.samsung.products.mobile))
    //       // setIsLoading(false)
        
    //   }, [])

        useEffect(()=>{
      const fetchData = async () => {
        await fetch('https://api.npoint.io/12694b0cf1d66201e6e9')
          .then(res => res.json())
          .then(data => {
            setProductsData(data.mobile)
            setIsLoading(false)

          })
          .catch(e => console.log(e))
         
      }

      const timer = setTimeout(() => {
        fetchData();
      }, 3000)

      return () => clearTimeout(timer);
    },[])

      
    console.log(productsData)


    return [
            productsData,
            isLoading,
            selectedPage, 
            setselectedPage,
            numberOfProducts,
            numberOfPages,
            paginaitonStyles,
        ]

}

export default useProducts