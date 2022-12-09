import styled from 'styled-components'

const StyledSidebar = styled.aside`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
height: 100vh;
width: 100%;
position: fixed;
overflow-y: scroll;
overflow-x: ${({displaySidebar})=> displaySidebar ? 'hidden' : 'visible'};
z-index: 11;
left: 0;
bottom: ${({displaySidebar})=> displaySidebar ? '0' : '-100%'};
transition: all .3s ease-in-out;
border-right: 2px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};

&::-webkit-scrollbar {
        width: 3px;
    }
&::-webkit-scrollbar-thumb{
    background: ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
    height: 10px;
}

@media (min-width: 900px){
    top:80px;
    width: 240px;
    left:${({displaySidebar})=> displaySidebar ? '0' : '-100%'};
    transition: none;
}

`

export default StyledSidebar