import React from 'react'
import StyledSearchBar from '../styles/SearchBar.styled'
import { RiSearch2Line } from 'react-icons/ri'

const SearchBar = ({theme}) => {
  return (
    <StyledSearchBar theme={theme}>
        <input type="text" placeholder='Search...'/>
        <RiSearch2Line style={{cursor: 'pointer', fontSize: '1.2rem', marginRight: '.5rem'}} />
    </StyledSearchBar>
  )
}

export default SearchBar