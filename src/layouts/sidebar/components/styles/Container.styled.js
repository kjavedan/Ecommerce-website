import styled from 'styled-components'

export const ContainerOuter = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: red;
border-bottom: 2px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
margin-top: 1.5rem;
`

export const ContainerInner = styled.div`
height: 50px;
display: flex;
align-items: center;
padding-left:.5rem;
span{
    margin-left: .2rem;
    margin-right: auto;
}
`