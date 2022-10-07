import styled from 'styled-components'

export const Item = styled.div`
    padding:.4rem 0;
    padding-left: .3rem;
    `

export const StyledParent = styled.div`
display: flex;
align-items: center;
font-size: 14px;
height: 2rem;
cursor: pointer;
color: ${({theme}) => theme === '#fff' ? '#706F6F' : '#B4B4B4'};
border-bottom: 1px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};


h5{
    margin-left: .2rem;
    margin-right: auto;
    font-size: .9rem;
    
    &:hover{
        text-decoration: underline;
    }
}
`
export const StyledChild = styled.div`
    height: 35px;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    font-size: .9rem;
    color: ${({theme}) => theme === '#fff' ? '#969494' : '#969494'};
    border-top: 1px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};

    &:hover{
        background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'};
        cursor: pointer;
    }
`