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
          <Route path='/mobile' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d67d901a72b59f232c125'} />} /> 
          <Route path='/mobile/samsung' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639c241315ab31599e1dac23'} />} />
          <Route path='/mobile/apple' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/6398922134ae3620ec2d4a51'} />} />
          <Route path='/mobile/sony' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639c7fc4dfc68e59d569ef85'} />} />
          <Route path='/mobile/Huawei' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639c7d8815ab31599e1def62'} />} />
          <Route path='/mobile/xiaomi' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639c89f7dfc68e59d569f599'} />} />
        
        {/* laptop */}
          <Route path='/laptop' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d6f2f01a72b59f232c4e6'} />} />
          <Route path='/laptop/apple' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d6e70dfc68e59d56a72e5'} />} />
          <Route path='/laptop/microsoft' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d6ec901a72b59f232c4a8'} />} />
          <Route path='/laptop/dell' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d6ee101a72b59f232c4b8'} />} />
          <Route path='/laptop/hp' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639d6f0bdfc68e59d56a733e'} />} />
        
        {/* headset */}
          <Route path='/headset' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639dc01adfc68e59d56aa167'} />} />
          <Route path='/headset/apple' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639dbe2115ab31599e1ea3d6'} />} />
          <Route path='/headset/beats' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639dbfdd15ab31599e1ea4ae'} />} />
          <Route path='/headset/samsung' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639dbbd701a72b59f232f0d4'} />} />
        
        {/* keyboard */}
          <Route path='/keyboard' element={<ProductCategory url={'keyboard'} />} />
          <Route path='/keyboard/apple' element={<ProductCategory url={'keyboard'} />} />
          <Route path='/keyboard/microsoft' element={<ProductCategory url={'keyboard'} />} />
        
        {/* mouse */}
          <Route path='/mouse' element={<ProductCategory url={'https://api.jsonbin.io/v3/b/639ef7c6dfc68e59d56b44a2'} />} />
        
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