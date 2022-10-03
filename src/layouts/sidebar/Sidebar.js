import React, {useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar, {SidebarToggler} from './components/styles/Sidebar.styled'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'


const Sidebar = () => {

    const {theme, displaySidebar, toggleSidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
        <SidebarToggler onClick={toggleSidebar} theme={theme} >
            {displaySidebar ?
            <BiChevronLeft style={{position:'fixed', transform:'translateX(0%)'}}/> :
            <BiChevronRight style={{position:'fixed', transform:'translateX(70%)'}}/> 
        }
        </SidebarToggler>
    </StyledSidebar>
  )
}

export default Sidebar