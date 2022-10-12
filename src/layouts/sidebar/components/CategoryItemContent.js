import React from 'react'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'

const CategoryItemContent = ({icon, title, children, displayChildElements}) => {

    const commonIcon = displayChildElements ? <BiChevronDown /> : <BiChevronRight />;

  return (
    <>
        {icon}<h5>{title}</h5> { children.length ? commonIcon : '' }
    </>
  )
}

export default CategoryItemContent