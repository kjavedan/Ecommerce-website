import styled from 'styled-components'

export const Item = styled.div`
    padding:.4rem 0;
    padding-left: .3rem;
    `

export const StyledParent = styled.div`
display: flex;
align-items: center;
font-size: 13px;
height: 3rem;
cursor: pointer;
color: ${({theme}) => theme === '#fff' ? '#706F6F' : '#B4B4B4'};
border-bottom: 1px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
overflow: hidden;

input{
accent-color: #7B6AB7;
}

&:hover{
    background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'};
    }
    
    h5{
        margin-left: .4rem;
        margin-right: auto;
        font-size: .9rem;
        font-weight: 400;
    }
    
@media (min-width: 500px ){
    height: 2.5rem;
}
@media (min-width: 700px){
    height: 2rem;
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