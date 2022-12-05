import styled from "styled-components";


export const BrandSidebar = styled.div`
background-color: green;
width: 100%;
height: 80Vh;
position: fixed;
transition: all .3s ease-in-out;
bottom: ${({displaySidebar}) => displaySidebar ? '0' : '-100%'};
left: 0;
z-index: 10;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};


@media (min-width: 900px) {
    width: 300px;
    position: sticky;
    position: -webkit-sticky; /* Safari */
    height: 600px;
    bottom: 50px;
    z-index: 2;
    border-radius: 20px;
}
`