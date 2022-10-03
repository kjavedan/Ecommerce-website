import React, {useContext} from 'react'
import { Context } from '../../context/uiContext'
import StyledHeader from './styles/Header.styled'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import HeaderBtns from './components/HeaderBtns'
import Theme from './components/Theme'

const Header = () => {

    const {theme, switchTheme} = useContext(Context)
    
  return (
    <StyledHeader theme={theme}>
        <Logo />
        <SearchBar theme={theme}/>
        <HeaderBtns theme={theme} />
        <Theme theme={theme} switchTheme={switchTheme} />
    </StyledHeader>
  )
}

export default Header