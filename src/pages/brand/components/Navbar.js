import { Context } from '../../../context/uiContext'
import React, { useContext, useState } from 'react'
import {StyledNavbar, Link} from '../styles/Navbar.styled'
import { samsungLinks } from '../../../data/navbarData'
import { nanoid } from 'nanoid'

const Navbar = () => {

    const {theme} = useContext(Context)

    const [heldCategory, setHeldCategory] = useState('showcase')

    const linkElements = samsungLinks.map(item => {
        return(
        <li 
        key={nanoid()}
        onClick={() => setHeldCategory(item)}
        >
            <Link to={`${item}`} theme={theme}>{item}
            <div style={{backgroundColor: heldCategory === item ?  '#2C00D5' : '' }}></div>
            </Link>
        </li>
        )
    })

  return (
    <StyledNavbar>
        <ul>
            {linkElements}
        </ul>
    </StyledNavbar>
  )
}

export default Navbar