import styled from "styled-components";


export const ProductsContainer = styled.div`
width: 100%;
min-height: 100vh;
background-color: blue;

@media (min-width: 900px){
    width: calc(100% - 300px);
    margin-left: auto;
}
`