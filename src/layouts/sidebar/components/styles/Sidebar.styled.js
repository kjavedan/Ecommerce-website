import styled from 'styled-components'

const StyledSidebar = styled.aside`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
height: 100vh;
width: 100%;
position: fixed;
top: 0;
z-index: 3;
transform: translateX(${({displaySidebar})=> displaySidebar ? '0' : '-100%'});
border-right: 2px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
overflow: ${({displaySidebar})=> displaySidebar ? 'hidden' : 'visible'};

@media (min-width: 900px){
    top:100px;
    width: 20%;
    transform: translateX(${({displaySidebar})=> displaySidebar ? '0' : '-100%'});
    transition: width linear .2s;
}
`

export const SidebarToggler = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
position: absolute;
right: -35px;
top: 50px;
cursor: pointer;
display: none;


@media (min-width: 900px){
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: #7B6AB7;
}
`

export default StyledSidebar