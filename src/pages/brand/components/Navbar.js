import React from 'react'
import { Link } from 'react-router-dom'
import {StyledNavbar} from '../styles/Navbar.styled'

const Navbar = () => {
  return (
    <StyledNavbar>
        <ul>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
            <Link>ShowCase</Link>
        </ul>
    </StyledNavbar>
  )
}

export default Navbar