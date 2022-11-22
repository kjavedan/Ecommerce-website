import {BsLaptop, BsPhone, BsFilterLeft, BsEyeFill} from 'react-icons/bs'
import {FaRegKeyboard, FaStar, FaMoneyBillAlt} from 'react-icons/fa'
import {CgMouse} from 'react-icons/cg'
import {GrView} from 'react-icons/gr'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import {GiCardboardBoxClosed, GiMoneyStack} from 'react-icons/gi'
import {FiHeadphones, FiCpu} from 'react-icons/fi'
import {HiArrowSmDown, HiArrowSmUp} from 'react-icons/hi'

export const links = [
    {
        title: 'mobile',
        icon: <BsPhone />
    },
    {
        title: 'laptop',
        icon: <BsLaptop />
    },
    {
        title: 'headset',
        icon: <FiHeadphones/>
    },
    {
        title: 'keyboard',
        icon: <FaRegKeyboard />
    },
    {
        title: 'mouse',
        icon: <CgMouse />
    },
    {
        title: 'other',
        icon: <FiCpu />
    },
]
export const ProductCategorylinks = [
    {
        title: 'most relative',
        icon: <GiCardboardBoxClosed />
    },
    {
        title: 'most viewed',
        icon: <BsEyeFill />
    },
    {
        title: 'top rated',
        icon: <FaStar/>
    },
    {
        title: 'most off',
        icon: <TbShoppingCartDiscount />
    },
    {
        title: 'cheapest',
        icon: <HiArrowSmDown />
    },
    {
        title: 'most expensive',
        icon: <HiArrowSmUp />
    }
]

