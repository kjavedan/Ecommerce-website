import React from 'react'
import { StyledPageRoute } from './styles/PageRoute.styled'
import '../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'

const PageRoute = () => {
  return (
    <StyledPageRoute>
        <AiFillHome style={{fontSize:'1rem'}} /> <span>Home</span> <BiChevronRight /> <span>Mobile</span> <BiChevronRight /> <span>Apple</span>
    </StyledPageRoute>
  )
}

export default PageRoute