import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {Wrapper} from './components/styles/Wrappers.styled'
import Category from './components/Category'
import '../../assets/App.css'
import { HiOutlineDeviceMobile, HiStar } from 'react-icons/hi'
import {BsLaptop} from 'react-icons/bs'
import {CgMouse} from 'react-icons/cg'
import {FaRegKeyboard} from 'react-icons/fa'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {AiFillHeart, AiFillFire} from 'react-icons/ai'
import {MdShoppingCart, MdLocalOffer} from 'react-icons/md'


const Sidebar = () => {

  const items = [
    {
      title: 'mobile',
      icon: <HiOutlineDeviceMobile />,
      children: ['apple', 'samsung', 'sony', 'nokia']
    },
    {
      title: 'Laptop',
      icon: <BsLaptop />,
      children: ['apple', 'microsoft', 'dell', 'hp']
    },
    {
      title: 'headset',
      icon: <FiHeadphones />,
      children: ['apple', 'samsung', 'sony', 'lenovo']
    },
    {
      title: 'keboard',
      icon: <FaRegKeyboard />,
      children: ['apple', 'lenovo', 'shiami', 'other']
    },
    {
      title: 'mouse',
      icon: <CgMouse />,
      children: ['apple', 'microsoft', 'other']
    },
    {
      title: 'other',
      icon: <FiCpu />,
      children: []
      }
  ]
  const items2 = [
    {
      title: 'hot sails',
      icon: <AiFillFire  style={{color: '#FF7A00'}}/>,
      children: []
    },
    {
      title: 'newest products',
      icon: <MdShoppingCart style={{color: '#8D74EE'}}/>,
      children: []
    },
    {
      title: 'popular products',
      icon: <AiFillHeart style={{color: '#FF0000'}}/>,
      children: []
    },
    {
      title: 'top rated',
      icon: <HiStar style={{color: '#FFD233'}}/>,
      children: []
    },
    {
      title: 'higehst off',
      icon: <MdLocalOffer style={{color: '#D8D7D7'}}/>,
      children: []
      }
  ]


    const {theme, displaySidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
         <Category title={'Category'} items={items} />
         <Category title={'Take a look at'} items={items2} />
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar