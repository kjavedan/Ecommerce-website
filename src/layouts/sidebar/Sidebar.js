import React, {useContext} from 'react'
import {Context} from '../../context/themeContext'
import StyledSidebar, {SidebarToggler} from './components/styles/Sidebar.styled'

const Sidebar = () => {

    const {theme} = useContext(Context)

  return (
    <StyledSidebar theme={theme}>
        <SidebarToggler theme={theme}>

        </SidebarToggler>
    </StyledSidebar>
  )
}

export default Sidebar