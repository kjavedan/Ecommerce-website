import React from 'react'
import StyledHeaderBtns from '../styles/HeaderBtns.styled'
import Button from '../styles/Button.styled'
import {HiOutlineLogin, HiOutlineShoppingBag} from 'react-icons/hi'

const HeaderBtns = ({theme}) => {

  return (
    <StyledHeaderBtns>
        <Button theme={theme}>
          Login <HiOutlineLogin style={{fontSize:'1.2rem', marginLeft:'.5rem'}}/>
        </Button>
        <Button theme={theme}>
          Cart <HiOutlineShoppingBag style={{fontSize:'1.2rem', marginLeft:'.5rem'}}/>
        </Button>
    </StyledHeaderBtns>
  )
}

export default HeaderBtns