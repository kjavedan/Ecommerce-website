import styled from "styled-components";

export const StyledProduct = styled.div`
height: 200px;
width: 100%;
display: flex;
padding: 1rem;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
cursor: pointer;

&:hover{
    box-shadow: ${({theme})=> theme === '#fff' ? 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' : 'rgba(78, 78, 78, 0.25) 0px 6px 12px -2px, rgba(81, 81, 81, 0.3) 0px 3px 7px -3px'};
}

@media (min-width: 900px){
    height: auto;
    flex-direction: column;
}

`

export const Card = styled.div`
min-width: 150px;
height: 160px;
border-radius: 8px;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};
box-shadow: 0px 2px 2px  rgba(0, 0, 0, .25) ;
position: relative;

@media (min-width: 900px){
    height: 250px;
    width: 250px;
    margin: 0 auto;
}
`

export const Image = styled.div`
position: absolute;
left: 50%;
top: 50%;
height: 100%;
width: 100%;
z-index: 0;
transform: translate(-50%, -50%);
img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 95%;
    border-radius: 8px;
}
`
export const Discount = styled.span`
position: absolute;
top: 0px;
left: 0px;
color: #D9D9D9;
padding: .1rem .3rem;
border-radius: 4px;
background-color: #E02B2B;
font: 500 .7rem 'Poppins';
z-index:1;
`
export const FreeDilevery = styled(Discount)`
top: 88%;
background-color: #171616;

@media (min-width: 900px){
    top: 92%;
}
`