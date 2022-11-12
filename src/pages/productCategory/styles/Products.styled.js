import styled from "styled-components";


const ProductsContainer = styled.div`
width: 100%;
display: grid;
margin-top: 2rem;
gap: 1px;

@media (min-width: 800px){
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 1000px){
    grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 1200px){
    grid-template-columns: repeat(4, 1fr);
}
`

export default ProductsContainer