import React, {useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {ContainerOuter, ContainerInner} from './components/styles/Container.styled'
import Wrapper from './components/styles/Wrapper.styled'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
const Sidebar = () => {

    const {theme, displaySidebar, toggleSidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
        <ContainerOuter theme={theme}>
          <h1>Category</h1>
          <BiChevronDown />
        </ContainerOuter>
        <ContainerInner>
          <HiOutlineDeviceMobile />
          <span>Mobile</span>
          <BiChevronRight />
        </ContainerInner>
        <ContainerOuter theme={theme}>
          <h1>Take a look at</h1>
          <BiChevronDown />
        </ContainerOuter>
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar