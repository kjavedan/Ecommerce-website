import styled  from "styled-components";

const ProductColors = styled.div`
height: 17px;
display: flex;
align-items: center;
margin: .2rem auto;

span{
    margin-left: .3rem;
}


@media (min-width: 900px){
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 15px;
    min-height: 100px;

    span{
        margin-left: 0;
        margin-bottom: .3rem;
    }
}
`

export default ProductColors