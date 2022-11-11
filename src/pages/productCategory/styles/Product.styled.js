import styled from "styled-components";

export const StyledProduct = styled.div`
height: auto;
width: 100%;
display: flex;
padding: 1rem;
border-bottom: solid 1px blue;
`

export const Card = styled.div`
min-width: 140px;
height: 140px;
border-radius: 8px;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};
box-shadow: 0px 2px 2px  rgba(0, 0, 0, .25) ;
position: relative;
`

export const Image = styled.div`
position: absolute;
left: 50%;
top: 50%;
width: 130px;
height: 130px;
z-index: 0;
transform: translate(-50%, -50%);
`
export const Discount = styled.span`
position: absolute;
top: 6px;
left: 6px;
color: #D9D9D9;
padding: .1rem .3rem;
border-radius: 4px;
background-color: #E02B2B;
font: 500 .7rem 'Poppins';
z-index:1;
`
export const FreeDilevery = styled(Discount)`
top: 83%;
background-color: #171616;
`