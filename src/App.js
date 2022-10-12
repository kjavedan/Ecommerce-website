import React, {useContext} from 'react'
import GlobalStyles from './assets/Global'
import {Context} from './context/uiContext'
import Home from './pages/home/Home' 
import ProductCategory from './pages/productCategory/ProductCategory'

const App = () => {

  const {theme} = useContext(Context)

  return (
    <>
    <GlobalStyles theme={theme}/>
    {/* <Home /> */}
    <ProductCategory />
    </>
  )
}

export default App