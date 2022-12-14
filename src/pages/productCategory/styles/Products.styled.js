import styled from "styled-components";


const ProductsContainer = styled.div`
width: 100%;
display: grid;
gap: 1px;

grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

@media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

}
`

export default ProductsContainer