import React from 'react'
import {StyledNavbar, Link} from '../styles/Navbar.styled'

const Navbar = () => {
  return (
    <StyledNavbar>
        <ul>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            <li><Link>Showcase</Link><div></div></li>
            {/* <Link>Mobile</Link>
            <Link>Laptop</Link>
            <Link>Monitor</Link>
            <Link>Headset</Link>
            <Link>all</Link> */}
        </ul>
    </StyledNavbar>
  )
}

export default Navbar