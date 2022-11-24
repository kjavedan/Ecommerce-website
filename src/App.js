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
        {/* categories */}
        <Route path='/' element={<Home />} />
        {/* mobile */}
        <Route path='/mobile' element={<ProductCategory category={'mobile'} />} > 
          <Route path='/mobile/apple' element={<ProductCategory category={'mobile'} />} />
          <Route path='/mobile/samsung' element={<ProductCategory category={'mobile'} />} />
          <Route path='/mobile/sony' element={<ProductCategory category={'mobile'} />} />
          <Route path='/mobile/nokia' element={<ProductCategory category={'mobile'} />} />
          <Route path='/mobile/Huawei' element={<ProductCategory category={'mobile'} />} />
          <Route path='/mobile/xiaomi' element={<ProductCategory category={'mobile'} />} />
        </Route>
        {/* laptop */}
        <Route path='/laptop' element={<ProductCategory category={'laptop'} />} >
          <Route path='/laptop/apple' element={<ProductCategory category={'laptop'} />} />
          <Route path='/laptop/microsoft' element={<ProductCategory category={'laptop'} />} />
          <Route path='/laptop/dell' element={<ProductCategory category={'laptop'} />} />
          <Route path='/laptop/hp' element={<ProductCategory category={'laptop'} />} />
        </Route>
        {/* headset */}
        <Route path='/headset' element={<ProductCategory category={'headset'} />} >
          <Route path='/headset/apple' element={<ProductCategory category={'headset'} />} />
          <Route path='/headset/beats' element={<ProductCategory category={'headset'} />} />
          <Route path='/headset/samsung' element={<ProductCategory category={'headset'} />} />
          <Route path='/headset/huawei' element={<ProductCategory category={'headset'} />} />
          <Route path='/headset/xiaomi' element={<ProductCategory category={'headset'} />} />
        </Route>
        {/* keyboard */}
        <Route path='/keyboard' element={<ProductCategory category={'keyboard'} />} >
          <Route path='/keyboard/apple' element={<ProductCategory category={'keyboard'} />} />
          <Route path='/keyboard/microsoft' element={<ProductCategory category={'keyboard'} />} />
        </Route>
        {/* mouse */}
        <Route path='/mouse' element={<ProductCategory category={'mouse'} />} >
          <Route path='/mouse/apple' element={<ProductCategory category={'mouse'} />} />
          <Route path='/mouse/microsoft' element={<ProductCategory category={'mouse'} />} />
        </Route>
        {/* other */}
        <Route path='/other' element={<ProductCategory category={'other'} />} />
        {/* take a look at */}
        <Route path='/hot sails' element={<ProductCategory category={'other'} />} />
        <Route path='/newest products' element={<ProductCategory category={'other'} />} />
        <Route path='/popular products' element={<ProductCategory category={'other'} />} />
        <Route path='/top rated' element={<ProductCategory category={'other'} />} />
        <Route path='/highest off' element={<ProductCategory category={'other'} />} />
      </Routes>
    </>
  )
}

export default App