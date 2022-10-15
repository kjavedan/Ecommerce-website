import styled from "styled-components";

const Container = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-right: .5rem;

@media (min-width: 900px){
    padding: 0 2rem;
}
`

export default Container