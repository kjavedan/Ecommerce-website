import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
padding-bottom: 5rem;

@media (min-width: 1250px) {
    width: 1250px;
}

@media (min-width: 1366px) {
 width :1300px ; 
}
`
export const ShowcaseContainer = styled(Container)`



@media (max-width: 1250px) {
    width:95%; 
}
`