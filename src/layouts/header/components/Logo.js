import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
   <Link style={{textDecoration: 'none'}} to={'/'}><h1><b style={{color:'#2C00D5', fontSize:'2rem'}}>S</b>hop.</h1> </Link>
  )
}

export default Logo