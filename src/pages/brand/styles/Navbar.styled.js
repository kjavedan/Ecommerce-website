import styled from "styled-components";

export const StyledNavbar = styled.nav`
width: 100%;
height: 80px;
margin-top: 20px;
overflow-x: scroll;
scrollbar-width: none;
-ms-overflow-style: none;
scroll-behavior: smooth;
display: flex;
align-items: center;

border-bottom: solid 1px gray;

&::-webkit-scrollbar{
    display: none;
}

ul{
    background-color: blue;
    min-width: 100%;
    display: flex;
    justify-content: space-around;
}
`

