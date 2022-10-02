import React, {useContext} from 'react'
import GlobalStyles from './assets/Global'
import {Context} from './context/themeContext'
import Home from './pages/Home' 

const App = () => {

  const {theme} = useContext(Context)

  return (
    <>
    <GlobalStyles theme={theme}/>
    <Home />
    </>
  )
}

export default App