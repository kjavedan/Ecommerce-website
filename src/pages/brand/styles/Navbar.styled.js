import styled from "styled-components";

const StyledNavbar = styled.nav`
width: 100%;
height: 80px;
background-color: red;
margin-top: 20px;
overflow-x: scroll;
scrollbar-width: none;
-ms-overflow-style: none;
scroll-behavior: smooth;
display: flex;
align-items: center;

&::-webkit-scrollbar{
    display: none;
}
`

export default StyledNavbar;