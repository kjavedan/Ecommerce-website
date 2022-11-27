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
        <li key={nanoid()}>
            <Link onClick={() => setHeldCategory(item)} theme={theme}>{item}</Link>
            <div style={{backgroundColor: heldCategory === item ?  '#2C00D5' : '' }}></div>
        </li>)
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