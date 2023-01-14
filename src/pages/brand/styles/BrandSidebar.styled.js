import styled from "styled-components";


export const StyledBrandSidebar = styled.div`
background-color: green;
width: 100%;
height: 85Vh;
padding-top: 1rem;
position: fixed;
transition: all .3s ease-in-out;
bottom: ${({displaySidebar}) => displaySidebar ? '0' : '-100%'};
left: 0;
overflow-y: scroll;
z-index: 10;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};


@media (min-width: 900px) {
    width: 300px;
    position: sticky;
    bottom: 50px;
    position: -webkit-sticky; /* Safari */
    height: auto;
    z-index: 2;
    border-radius: 20px;
    overflow-y: unset;
}
`