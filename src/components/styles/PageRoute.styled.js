import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledPageRoute = styled.ul`
width: 100%;
height: 50px;
display: flex;
align-items: center;
padding-left: 0.8rem;
color: gray;

@media (min-width: 900px){
    padding-left: 3.2rem;
}
`

export const Link = styled(NavLink)`
    font-size: .9rem;
    font-family: 'poppins';
    padding-left: .2rem;
    text-decoration: none;
    color: #7B6AB7;

    &:hover{
        text-decoration: underline;
    }
`