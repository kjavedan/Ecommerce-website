import styled from 'styled-components'

export const StyledProduct = styled.div`
height: 100%;
width: 200px;
display: inline-block;
`

export const Card = styled.div`
width: 170px;
height: 170px;
margin: 0 auto;
border-radius: 8px;
background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'};
box-shadow: 0px 2px 2px  rgba(0, 0, 0, .25) ;
position: relative;
`

export const Image = styled.div`
background-color: blue;
position: absolute;
left: 50%;
top: 50%;
width: 130px;
height: 130px;
z-index: 0;
transform: translate(-50%, -50%);
`
export const Offer = styled.span`
position: absolute;
top: 6px;
left: 6px;
color: #D9D9D9;
padding: .1rem .3rem;
border-radius: 4px;
background-color: red;
font: 500 .7rem 'Poppins';
z-index:1;
`
export const FreeDilevery = styled(Offer)`
top: 83%;
background-color: black;
`



