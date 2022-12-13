import React, {useContext} from 'react'
import GlobalStyles from './assets/Global'
import {Context} from './context/uiContext'
import Home from './pages/home/Home' 
import ProductCategory from './pages/productCategory/ProductCategory'
import {Routes, Route} from 'react-router-dom'
import Brand from './pages/brand/Brand'
import { SkeletonTheme } from 'react-loading-skeleton'


const App = () => {

  const {theme} = useContext(Context)

  return (
  <SkeletonTheme baseColor={theme === '#fff' ? '#f1f1f1' : '#313131'} highlightColor={theme === '#fff' ? '#dfdfdf' : '#525252'}>
    <GlobalStyles theme={theme}/>
      <Routes>
        {/* categories */}
        <Route path='/' element={<Home />} />
        {/* mobile */}
        <Route path='/mobile' element={<ProductCategory url={'mobile'} />} > 
          <Route path='/mobile/apple' element={<ProductCategory url={'mobile'} />} />
          <Route path='/mobile/samsung' element={<ProductCategory url={'mobile'} />} />
          <Route path='/mobile/sony' element={<ProductCategory url={'mobile'} />} />
          <Route path='/mobile/nokia' element={<ProductCategory url={'mobile'} />} />
          <Route path='/mobile/Huawei' element={<ProductCategory url={'mobile'} />} />
          <Route path='/mobile/xiaomi' element={<ProductCategory url={'mobile'} />} />
        </Route>
        {/* laptop */}
        <Route path='/laptop' element={<ProductCategory url={'laptop'} />} >
          <Route path='/laptop/apple' element={<ProductCategory url={'laptop'} />} />
          <Route path='/laptop/microsoft' element={<ProductCategory url={'laptop'} />} />
          <Route path='/laptop/dell' element={<ProductCategory url={'laptop'} />} />
          <Route path='/laptop/hp' element={<ProductCategory url={'laptop'} />} />
        </Route>
        {/* headset */}
        <Route path='/headset' element={<ProductCategory url={'headset'} />} >
          <Route path='/headset/apple' element={<ProductCategory url={'headset'} />} />
          <Route path='/headset/beats' element={<ProductCategory url={'headset'} />} />
          <Route path='/headset/samsung' element={<ProductCategory url={'headset'} />} />
          <Route path='/headset/huawei' element={<ProductCategory url={'headset'} />} />
          <Route path='/headset/xiaomi' element={<ProductCategory url={'headset'} />} />
        </Route>
        {/* keyboard */}
        <Route path='/keyboard' element={<ProductCategory url={'keyboard'} />} >
          <Route path='/keyboard/apple' element={<ProductCategory url={'keyboard'} />} />
          <Route path='/keyboard/microsoft' element={<ProductCategory url={'keyboard'} />} />
        </Route>
        {/* mouse */}
        <Route path='/mouse' element={<ProductCategory url={'mouse'} />} >
          <Route path='/mouse/apple' element={<ProductCategory url={'mouse'} />} />
          <Route path='/mouse/microsoft' element={<ProductCategory url={'mouse'} />} />
        </Route>
        {/* other */}
        <Route path='/other' element={<ProductCategory url={'other'} />} />
        {/* take a look at */}
        <Route path='/hot sails' element={<ProductCategory url={'other'} />} />
        <Route path='/newest products' element={<ProductCategory url={'other'} />} />
        <Route path='/popular products' element={<ProductCategory url={'other'} />} />
        <Route path='/top rated' element={<ProductCategory url={'other'} />} />
        <Route path='/highest off' element={<ProductCategory url={'other'} />} />
        {/* Brands */}
        <Route path='/brands/apple/*' element={<Brand brandName={'apple'} />} />
        <Route path='/brands/microsoft/*' element={<Brand brandName={'microsoft'} />} />
        <Route path='/brands/dell/*' element={<Brand brandName={'dell'} />} />
        <Route path='/brands/hp/*' element={<Brand brandName={'hp'} />} />
        <Route path='/brands/samsung/*' element={<Brand brandName={'samsung'} />} />
        <Route path='/brands/sony/*' element={<Brand brandName={'sony'} />} />
        <Route path='/brands/lenovo/*' element={<Brand brandName={'lenovo'} />} />
        <Route path='/brands/huawei/*' element={<Brand brandName={'huawei'} />} />
      </Routes>
    </SkeletonTheme>
  )
}

export default App