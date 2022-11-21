import React, {useContext} from 'react'
import GlobalStyles from './assets/Global'
import {Context} from './context/uiContext'
import Home from './pages/home/Home' 
import ProductCategory from './pages/productCategory/ProductCategory'
import {Routes, Route} from 'react-router-dom'


const App = () => {

  const {theme} = useContext(Context)

  return (
    <>
      <GlobalStyles theme={theme}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<ProductCategory />} />
      </Routes>
    </>
  )
}

export default App