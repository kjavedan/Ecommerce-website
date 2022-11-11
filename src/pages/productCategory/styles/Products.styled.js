import styled from "styled-components";


const ProductsContainer = styled.div`
width: 100%;
display: grid;
padding-top: 2rem;

@media (min-width: 800px){
    grid-template-columns: 1fr 1fr;
}
`

export default ProductsContainer