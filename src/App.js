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
        <Route path='/mobile' element={<ProductCategory category={'mobile'} />} />
        <Route path='/laptop' element={<ProductCategory category={'laptop'} />} />
        <Route path='/headset' element={<ProductCategory category={'headset'} />} />
        <Route path='/keyboard' element={<ProductCategory category={'keyboard'} />} />
        <Route path='/mouse' element={<ProductCategory category={'mouse'} />} />
        <Route path='/other' element={<ProductCategory category={'other'} />} />
      </Routes>
    </>
  )
}

export default App