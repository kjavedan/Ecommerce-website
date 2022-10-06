import React from 'react'
import { Child } from './styles/CategoryItem.styled'

const CategoryItem = ({data}) => {
  return (
    <Child>{data}</Child>
  )
}

export default CategoryItem