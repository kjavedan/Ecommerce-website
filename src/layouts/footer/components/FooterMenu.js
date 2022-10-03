import React, { useContext } from 'react'
import StyledMenu from '../styles/FooterMenu.styled'
import { Context } from '../../../context/uiContext'
import {HiOutlineHome, HiHome} from 'react-icons/hi'
import {BiCategoryAlt} from 'react-icons/bi'
import {BsPerson, BsFillPersonFill, BsHandbag, BsHandbagFill} from 'react-icons/bs'

const FooterMenu = () => {

    const {theme, toggleSidebar} = useContext(Context)

    const styles ={
        cursor :'pointer',
    }

  return (
    <StyledMenu theme={theme}>
        <BiCategoryAlt onClick={toggleSidebar} style={styles} />
        <HiOutlineHome style={styles} />
        <BsHandbag style={styles} />
        <BsPerson style={styles} />
    </StyledMenu>
  )
}

export default FooterMenu