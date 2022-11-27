import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height : 100vh;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};

border: solid 1px black;

@media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
}
`