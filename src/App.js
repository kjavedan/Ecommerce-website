import React, {useContext} from 'react'
import GlobalStyles from './assets/Global'
import {Context} from './context/uiContext'
import Home from './pages/home/Home' 

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