import { HiOutlineDeviceMobile, HiStar, HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'
import {BsLaptop, BsApple} from 'react-icons/bs'
import {CgMouse} from 'react-icons/cg'
import {FaRegKeyboard} from 'react-icons/fa'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {AiFillHeart, AiFillFire} from 'react-icons/ai'
import {MdShoppingCart, MdLocalOffer} from 'react-icons/md'

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
          icon: <AiFillFire  />,
          children: []
        },
        {
          title: 'newest products',
          icon: <MdShoppingCart />,
          children: []
        },
        {
          title: 'popular products',
          icon: <AiFillHeart />,
          children: []
        },
        {
          title: 'top rated',
          icon: <HiStar />,
          children: []
        },
        {
          title: 'higehst off',
          icon: <MdLocalOffer />,
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
        // {
        //   title: 'most sailed',
        //   icon: <AiFillFire   />,
        //   children: []
        // },
        // {
        //   title: 'newest ',
        //   icon: <MdShoppingCart  />,
        //   children: []
        // },
        // {
        //   title: 'top rated',
        //   icon: <HiStar  />,
        //   children: []
        // },
        // {
        //   title: 'heighest off',
        //   icon: <MdLocalOffer />,
        //   children: []
        // },
        // {
        //   title: 'cheapest',
        //   icon: <HiArrowSmDown />,
        //   children: []
        //   },
        // {
        //   title: 'most expensive',
        //   icon: <HiArrowSmUp />,
        //   children: []
        //   }
        ]
    }
  ]
