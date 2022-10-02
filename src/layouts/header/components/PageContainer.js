import React, {useContext} from 'react'
import StyledPageContainer from './styles/PageContainer.styled'
import { Context } from '../context/themeContext'
import Header from '../layouts/header/Header'
const PageContainer = () => {

const {theme} = useContext(Context)
  return (
    <StyledPageContainer theme={theme}>
        <Header />
    </StyledPageContainer>
  )
}

export default PageContainer