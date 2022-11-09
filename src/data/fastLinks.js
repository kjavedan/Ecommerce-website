import {BsLaptop, BsPhone, BsFilterLeft} from 'react-icons/bs'
import {FaRegKeyboard, FaStar, FaMoneyBillAlt} from 'react-icons/fa'
import {CgMouse} from 'react-icons/cg'
import {GrView} from 'react-icons/gr'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import {GiCardboardBoxClosed, GiMoneyStack} from 'react-icons/gi'
import {FiHeadphones, FiCpu} from 'react-icons/fi'

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
        icon: <GrView />
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
        icon: <FaMoneyBillAlt />
    },
    {
        title: 'most expensive',
        icon: <GiMoneyStack />
    },
    {
        title: 'Filters',
        icon: <BsFilterLeft/>
    }
]

