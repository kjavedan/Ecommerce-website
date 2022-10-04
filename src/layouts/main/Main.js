import React, {useContext} from 'react'
import StyledMain from './components/styles/Main.styled'
import {Context} from '../../context/uiContext'
import {SidebarTogglerOpen, SidebarTogglerClose} from '../../components/styles/SidebarToggler.styled'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

const Main = () => {
  
  const {theme, displaySidebar, toggleSidebar} = useContext(Context)
  return (
    <StyledMain theme={theme} displaySidebar={displaySidebar}>
        {displaySidebar ? 
        <SidebarTogglerClose onClick={toggleSidebar}  theme={theme} >
        <BiChevronLeft style={{position: 'fixed', left:'8'}} />
        </SidebarTogglerClose> :
        <SidebarTogglerOpen onClick={toggleSidebar}  theme={theme} >
        <BiChevronRight style={{position: 'fixed', left:'26'}}/>
        </SidebarTogglerOpen>
      }
    </StyledMain>
  )
}

export default Main