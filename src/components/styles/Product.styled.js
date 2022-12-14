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
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};
box-shadow: 0px 2px 2px  rgba(0, 0, 0, .25) ;
position: relative;
cursor: pointer;

`

export const Image = styled.div`
position: absolute;
left: 50%;
top: 50%;
width: 160px;
height: 160px;
z-index: 0;
transform: translate(-50%, -50%);

img{
    height: 100%;
}
`
export const Discount = styled.span`
position: absolute;
left: 0;
top: 0;
color: #D9D9D9;
padding: .1rem .3rem;
border-radius: 4px;
background-color: #E02B2B;
font: 500 .7rem 'Poppins';
z-index:1;

`
export const FreeDilevery = styled(Discount)`
top:89%;
background-color: #171616;
`



