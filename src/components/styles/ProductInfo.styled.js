import styled from 'styled-components'

export const ProductInfo = styled.div`
height: 100%;
padding: .5rem 1rem;
position: relative;
`

export const Availability = styled.p`
color: #E02B2B;
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