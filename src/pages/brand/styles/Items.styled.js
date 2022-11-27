import styled from "styled-components";

export const Item1 = styled.div`
height: 310px;
width: 100%;
border-radius: 20px;
background: url('../../../../images/samsung-1.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
cursor: pointer;
transition: all .2s ease-in-out;

&:hover{
    transform: scale(103%);
    transition: all .2s ease-in-out;
}

@media (min-width: 1200px) {
    height: 500px;
}

`
export const Item2 = styled(Item1)`
background: url('../../../../images/samsung-8.jpg');
background-size: 100%;
height: 220px;
`
export const Item3 = styled(Item1)`
background: url('../../../../images/samsung-2.jpg');
background-size: 100%;

height: 262px;
`
export const Item4 = styled(Item2)`
height: 260px;

background: url('../../../../images/samsung-4.jpg');
`
export const Item5 = styled(Item1)`
background: url('../../../../images/samsung-5.jpg');
`
export const Item6 = styled(Item1)`
background: url('../../../../images/samsung-6.jpg');
`
export const Item7 = styled(Item1)`
background: url('../../../../images/samsung-7.jpg');
`
export const Item8 = styled(Item1)`
background: url('../../../../images/samsung-10.webp');
background-size: 100%;
height: 260px;

@media (min-width: 1200px) {
    height: 650px;
}
`