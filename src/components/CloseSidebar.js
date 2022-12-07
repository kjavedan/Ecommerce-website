import React, { useContext } from 'react'
import StyledCloseSidebar from './styles/CloseSidebar.styled'
import {AiOutlineClose} from 'react-icons/ai'
import { Context } from '../context/uiContext'

const CloseSidebar = () => {

  const {closeSidebar} = useContext(Context)

  return (
    <StyledCloseSidebar
    onClick={closeSidebar}
    >
        <span>close</span>
        <AiOutlineClose />
    </StyledCloseSidebar>
  )
}

export default CloseSidebar