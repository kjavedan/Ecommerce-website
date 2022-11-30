import styled from "styled-components";

export const Container = styled.div`
width: 95%;
margin: 0 auto;
min-height : 100vh;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
padding-bottom: 5rem;

@media (min-width: 1250px) {
    width: 1250px;
}
@media (min-width: 1366px) {
 width :1280px ; 
}
`
