import styled from 'styled-components'

const StyledSidebar = styled.aside`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
height: 100vh;
width: 100%;
position: fixed;
overflow-y: scroll;
overflow-x: ${({displaySidebar})=> displaySidebar ? 'hidden' : 'visible'};
top: 0;
z-index: 3;
transform: translateX(${({displaySidebar})=> displaySidebar ? '0' : '-100%'});
border-right: 2px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};

&::-webkit-scrollbar {
        width: 3px;
    }
&::-webkit-scrollbar-thumb{
    background: ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
    height: 10px;
}

@media (min-width: 900px){
    top:100px;
    width: 20%;
    transform: translateX(${({displaySidebar})=> displaySidebar ? '0' : '-100%'});
    transition: width linear .2s;
}
/* @media (min-width:1100px){
    width: 18%;
} */

`

export default StyledSidebar