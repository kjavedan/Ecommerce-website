import styled  from "styled-components";

const ProductColors = styled.div`
width: 60px;
height: 17px;
display: flex;
align-items: center;
justify-content: space-around;
margin: .2rem auto;


@media (min-width: 900px){
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 15px;
    min-height: 50px;
}
`

export default ProductColors