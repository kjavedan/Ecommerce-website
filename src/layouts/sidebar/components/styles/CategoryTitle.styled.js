import styled from 'styled-components'

export const StyledCategoryTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: ${({theme}) => theme === '#fff' ? '#000' : '#D9D9D9'};
` 
