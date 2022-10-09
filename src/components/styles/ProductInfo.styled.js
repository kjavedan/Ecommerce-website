import styled from 'styled-components'

export const ProductInfo = styled.div`
width: 100%;
height: 100%;
padding: .5rem 1rem;
`

export const Availability = styled.p`
color: red;
font: 500 .7rem 'Roboto';
display: inline-flex;
width: 80%;
`

export const Rate = styled.div`
display: inline-flex;
align-items: center;
margin-left: auto;
margin-bottom: .5rem;

span{
    font: 500 .8rem 'Roboto';
    margin-right: .2rem;
}

`
export const BeforeDiscount = styled.span`
text-decoration: line-through;
color: #969494;
`