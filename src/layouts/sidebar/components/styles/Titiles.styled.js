import styled from 'styled-components'

export const StyledCategoryTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: ${({theme}) => theme === '#fff' ? '#000' : '#D9D9D9'};
` 
export const ParentTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    color: ${({theme}) => theme === '#fff' ? '#706F6F' : '#B4B4B4'};

    h5{
        margin-left: .2rem;
        margin-right: auto;
        font-size: .9rem;
        
        &:hover{
            text-decoration: underline;
        }
    }
`