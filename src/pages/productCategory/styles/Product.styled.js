import styled from "styled-components";

export const StyledProduct = styled.div`
height: 170px;
width: 100%;
display: flex;
padding: 1rem;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
cursor: pointer;

&:hover{
    box-shadow: ${({theme})=> theme === '#fff' ? 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' : 'rgba(78, 78, 78, 0.25) 0px 6px 12px -2px, rgba(81, 81, 81, 0.3) 0px 3px 7px -3px'};
}

@media (min-width: 900px){
    height: 400px;
    flex-direction: column;
}
`

export const Card = styled.div`
min-width: 120px;
height: 120px;
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

@media (min-width: 900px){
    top: 90%;
}
`