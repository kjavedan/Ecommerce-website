import styled from 'styled-components'

export const ProductInfo = styled.div`
height: 100%;
padding: .5rem 1rem;
position: relative;
width: 100%;

h3{
    overflow: hidden;
    text-overflow: ellipsis;
}

`

export const Availability = styled.p`
color: #E02B2B;
font: 500 .7rem 'Roboto';
display: inline;
width: 80%;
`

export const Rate = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-bottom: .5rem;
margin-top: .5rem;

span{
    font: 500 .7rem 'Roboto';
    margin-right: .2rem;
}
`
export const RateBlock = styled(Rate)`
display: flex;
`
export const BeforeDiscount = styled.span`
text-decoration: line-through;
color: #969494;
`

export const Price = styled.h3`
position: absolute;
bottom: 0;
right: 10%;
`