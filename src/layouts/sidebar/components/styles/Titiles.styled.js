import styled from 'styled-components'

export const StyledCategoryTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
` 
export const ParentTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    color: ${({theme}) => theme === '#fff' ? '#969494' : '#969494'};

    h4{
        margin-left: .3rem;
        margin-right: auto;
        font-size: .9rem;
    }
`