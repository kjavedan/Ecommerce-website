import React, {useContext} from 'react'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import { SidebarTogglerOpen, SidebarTogglerClose } from './styles/SidebarToggler.styled'
import { Context } from '../../../context/uiContext'

const SidebarToggler = () => {

    const {theme, displaySidebar, toggleSidebar} = useContext(Context)

  return (
    <>
    {displaySidebar ? 
        <SidebarTogglerClose onClick={toggleSidebar}  theme={theme} >
        <BiChevronLeft style={{position: 'fixed', left:'5'}} />
        </SidebarTogglerClose> :
        <SidebarTogglerOpen onClick={toggleSidebar}  theme={theme} >
        <BiChevronRight style={{position: 'fixed', left:'26'}}/>
        </SidebarTogglerOpen>
      }
    </>
  )
}

export default SidebarToggler