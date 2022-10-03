import React, {useContext} from 'react'
import StyledMain from './components/styles/Main.styled'
import {Context} from '../../context/uiContext'

const Main = () => {
  
  const {theme, displaySidebar} = useContext(Context)
  return (
    <StyledMain theme={theme} displaySidebar={displaySidebar}>
        
    </StyledMain>
  )
}

export default Main