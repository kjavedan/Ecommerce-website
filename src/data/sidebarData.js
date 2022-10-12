import { HiOutlineDeviceMobile, HiStar } from 'react-icons/hi'
import {BsLaptop, BsApple} from 'react-icons/bs'
import {CgMouse} from 'react-icons/cg'
import {FaRegKeyboard, FaRegMoneyBillAlt} from 'react-icons/fa'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {AiFillHeart, AiFillFire} from 'react-icons/ai'
import {MdShoppingCart, MdLocalOffer} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'

export const sidebarDataHome = [
    {
      title: 'Category',
      data: [
      {
        title: 'mobile',
        icon: <HiOutlineDeviceMobile />,
        children: ['all', 'apple', 'samsung', 'sony', 'nokia']
      },
      {
        title: 'Laptop',
        icon: <BsLaptop />,
        children: ['all', 'apple', 'microsoft', 'dell', 'hp']
      },
      {
        title: 'headset',
        icon: <FiHeadphones />,
        children: ['all', 'apple', 'samsung', 'sony', 'lenovo']
      },
      {
        title: 'keboard',
        icon: <FaRegKeyboard />,
        children: ['apple', 'lenovo', 'shiami', 'other']
      },
      {
        title: 'mouse',
        icon: <CgMouse />,
        children: ['all', 'apple', 'microsoft', 'other']
      },
      {
        title: 'other',
        icon: <FiCpu />,
        children: []
        }
      ]
    },
    {
      title: 'Take a look at',
      data: [
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
    }  
  ]
 
export const sidebarDataMobile = [
    {
      title: 'Filters',
        data: [
        {
          title: 'Brands',
          icon: <BsApple styled={{color: 'grey'} } />,
          children: ['all', 'apple', 'samsung', 'sony', 'howavei', 'shiami']
        },
        {
          title: 'most sailed',
          icon: <AiFillFire  style={{color: '#FF7A00'}} />,
          children: []
        },
        {
          title: 'newest ',
          icon: <MdShoppingCart style={{color: '#8D74EE'}} />,
          children: []
        },
        {
          title: 'top rated',
          icon: <HiStar style={{color: '#FFD233'}} />,
          children: []
        },
        {
          title: 'heighest off',
          icon: <MdLocalOffer style={{color: 'red'}}/>,
          children: []
        },
        {
          title: 'cheapest',
          icon: <FaRegMoneyBillAlt style={{color: 'lightgreen'}} />,
          children: []
          },
        {
          title: 'most expensive',
          icon: <GiMoneyStack style={{color: 'green'}} />,
          children: []
          }
        ]
    }
  ]
