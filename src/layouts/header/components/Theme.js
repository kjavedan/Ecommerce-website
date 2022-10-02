import React from 'react'
import StyledTheme from '../styles/Theme.styled'
import {ImSun} from 'react-icons/im'
import {IoMdMoon} from 'react-icons/io'
import {HiOutlineLogin} from 'react-icons/hi'

const Theme = ({theme,switchTheme}) => {
  return (
    <StyledTheme theme={theme}>
        {theme === '#fff' ? <ImSun onClick={switchTheme} /> : <IoMdMoon onClick={switchTheme}/>}
    </StyledTheme>
  )
}

export default Theme