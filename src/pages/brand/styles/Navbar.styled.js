import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
width: 100%;
height: 40px;
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
    min-width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 2rem;

    @media (min-width: 1000px) {
        justify-content: space-around;
    }

    li{
        height: 100%;
        position: relative;
        list-style: none;
        width: 100px;
        text-align: center;
        margin-right: 2.5rem;
        

        div{
            width: 100%;
            height: 6px;
            border-top-left-radius:7px;
            border-top-right-radius: 7px;
            background-color: #2C00D5;
            position: absolute;
            bottom: 0;
        }
    }
}
`

export const Link = styled(NavLink)`
text-decoration: none;
text-align: center;
width: 100%;

`
