import React from 'react'
import {BsFilterLeft} from 'react-icons/bs'
import StyledFilterBtn from '../styles/FilterBtn.styled'

const FilterBtn = () => {
    return (
        <StyledFilterBtn>
           Filters <BsFilterLeft style={{fontSize:'2rem'}}/>
        </StyledFilterBtn>

    )
}

export default FilterBtn