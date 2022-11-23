import { HiOutlineDeviceMobile, HiStar, HiArrowSmDown, HiArrowSmUp, HiCamera } from 'react-icons/hi'
import {BsLaptop, BsApple, BsArrowsFullscreen} from 'react-icons/bs'
import {CgMouse, CgSmartphoneRam} from 'react-icons/cg'
import {FaRegKeyboard} from 'react-icons/fa'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {AiFillHeart, AiFillFire, AiOutlineFullscreen} from 'react-icons/ai'
import {MdShoppingCart, MdLocalOffer, MdColorLens, MdEventAvailable} from 'react-icons/md'
import {VscColorMode} from 'react-icons/vsc'
import {RiCameraLensFill, RiCpuLine} from 'react-icons/ri'
import { BiMemoryCard } from 'react-icons/bi'
import { TiVendorMicrosoft } from 'react-icons/ti'

export const sidebarDataHome = [
    {
      title: 'Category',
      data: [
      {
        title: 'mobile',
        icon: <HiOutlineDeviceMobile />,
        children: ['all', 'apple', 'samsung', 'sony', 'nokia' ,'huawei', 'xiaomi']
      },
      {
        title: 'Laptop',
        icon: <BsLaptop />,
        children: ['all', 'apple', 'microsoft', 'dell', 'hp']
      },
      {
        title: 'headset',
        icon: <FiHeadphones />,
        children: ['all', 'beats', 'apple', 'samsung', 'huawei', 'xiaomi']
      },
      {
        title: 'keboard',
        icon: <FaRegKeyboard />,
        children: ['all', 'apple', 'microsoft']
      },
      {
        title: 'mouse',
        icon: <CgMouse />,
        children: ['all', 'apple', 'microsoft']
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
          title: 'highest off',
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
          children: ['apple', 'samsung', 'sony', 'howavei', 'shiami']
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
          children: ['64GB', '256GB', '512GB', '1TB']
        },
        {
          title: 'CPU',
          icon: <RiCpuLine  />,
          children: ['3 core', '5 core', '7 core', '9 core', 'm1 chip', 'm2 chip']
        },
        
        {
          title: 'Screen Size',
          icon: <AiOutlineFullscreen  />,
          children: ['3 to 4 inch', '3 to 5 inch', '5 to 6 inch', '6 to 7 inch', '13 to 14 inch', '14 to 17 inch', '> 17 inch']
        },
        {
          title: 'Operation system',
          icon: <TiVendorMicrosoft  />,
          children: ['ios','android','mac', 'windows', 'linux']
        },
        {
          title: 'Only available',
          icon: <MdEventAvailable  />,
          children: []
        },
        ]
    }
  ]
