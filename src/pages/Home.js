import React, { useContext } from 'react'
import Header from '../layouts/header/Header'
import StyledContainer from '../components/styles/Container.styled'
import {Context} from '../context/themeContext'

const Home = () => {

    const {theme} = useContext(Context)

  return (
    <>
     <StyledContainer theme={theme}>
        <Header />
    </StyledContainer>
    </>
  )
}

export default Home