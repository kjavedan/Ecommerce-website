import styled from 'styled-components'

const StyledSidebar = styled.aside`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
height: 100vh;
width: 100%;
position: fixed;
overflow-y: scroll;
overflow-x: ${({displaySidebar})=> displaySidebar ? 'hidden' : 'visible'};
top: 0;
z-index: 11;
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
    width: 240px;
    transform: translateX(${({displaySidebar})=> displaySidebar ? '0' : '-100%'});
    transition: width linear .2s;
}


`

export default StyledSidebar