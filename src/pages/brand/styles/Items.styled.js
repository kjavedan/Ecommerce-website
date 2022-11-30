import styled from "styled-components";

export const Item1 = styled.div`
height: 310px;
width: 100%;
border-radius: 20px;
background:  url(${({url}) => url});
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
background: url(${({url}) => url});
background-size: 100%;
height: 220px;
`
export const Item3 = styled(Item1)`
background: url(${({url}) => url});
background-size: 100%;

height: 262px;
`
export const Item4 = styled(Item2)`
background: url(${({url}) => url});
background-size: cover;
height: 200px;
`
export const Item5 = styled(Item4)`
background: url(${({url}) => url});
background-size: cover;
height: 200px;
`
export const Item6 = styled(Item4)`
background: url(${({url}) => url});
background-size: cover;
height: 200px;
`
export const Item7 = styled(Item4)`
background: url(${({url}) => url});
background-size: cover;
height: 380px;

@media (min-width: 1200px) {
    height: 520px;
}
`
export const Item8 = styled(Item1)`
background: url(${({url}) => url});
background-size: 100%;
height: 200px;
margin-bottom: 5rem;

@media (min-width: 1200px) {
    height: 690px;
}
`
export const Item9 = styled(Item4)`
background: url(${({url}) => url});
background-size: cover;
height: 300px;
`