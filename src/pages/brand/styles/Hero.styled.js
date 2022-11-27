import styled from "styled-components";


export const StyledHero = styled.div`
width: 100%;
height: 320px;
margin: 80px auto;
margin-bottom: 0;




@media (min-width: 1200px) {
 width   :1200px ; 
 padding-top: 20px;
 height: 340px;
}

`
export const HeroImages = styled.div`
width: 100%;
height: 200px;
position: relative;
background: url('../../../../images/samsung-hero.jpg');
position: cover;
background-repeat: no-repeat;
background-position : 0 ;

@media (min-width: 1000px) {
border-radius: 20px;
}

`
export const BrandImage = styled.img`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 50px;
height: 150px;
border-radius: 20px;

`
