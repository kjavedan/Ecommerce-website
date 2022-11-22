import { HiOutlineDeviceMobile, HiStar, HiArrowSmDown, HiArrowSmUp, HiCamera } from 'react-icons/hi'
import {BsLaptop, BsApple, BsArrowsFullscreen} from 'react-icons/bs'
import {CgMouse, CgSmartphoneRam} from 'react-icons/cg'
import {FaRegKeyboard} from 'react-icons/fa'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {AiFillHeart, AiFillFire, AiOutlineFullscreen} from 'react-icons/ai'
import {MdShoppingCart, MdLocalOffer, MdColorLens} from 'react-icons/md'
import {VscColorMode} from 'react-icons/vsc'
import {RiCameraLensFill} from 'react-icons/ri'
import { BiMemoryCard } from 'react-icons/bi'

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
          icon: <BsApple />,
          children: ['all', 'apple', 'samsung', 'sony', 'howavei', 'shiami']
        },
        {
          title: 'Colors',
          icon: <VscColorMode  />,
          children: ['black', 'white', 'blue', 'red', 'green', 'gray']
        },
        {
          title: 'Camera',
          icon: <HiCamera  />,
          children: ['0 comera',' 1 camera', '2 comera', '3 comera']
        },
        {
          title: 'resolution',
          icon: <RiCameraLensFill  />,
          children: ['5MP', '8MP', '12MP', '20MP', '40MP', '48MP']
        },
        {
          title: 'RAM',
          icon: <CgSmartphoneRam  />,
          children: ['2GB', '4GB', '6GB', '8GB', '16GB', '32GB']
        },
        {
          title: 'Memory',
          icon: <BiMemoryCard  />,
          children: ['8GB', '16GB', '32GB', '64GB', '256GB', '512GB', '1TB']
        },
        {
          title: 'Screen Size',
          icon: <AiOutlineFullscreen  />,
          children: ['3 to 4 inch', '3 to 5 inch', '5 to 6 inch', '6 to 7 inch', '13 to 14 inch', '14 to 17 inch', '> 17 inch']
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
