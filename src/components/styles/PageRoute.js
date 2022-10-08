import React from 'react'
import { StyledPageRoute } from './PageRoute.styled'
import {GoHome} from 'react-icons/go'
import '../../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'

const PageRoute = () => {
  return (
    <StyledPageRoute>
        <div className="root"> 
        <GoHome /> <span>Home</span> <BiChevronRight /> <span>Mobile</span> <BiChevronRight /> <span>Apple</span>
        </div>
    </StyledPageRoute>
  )
}

export default PageRoute