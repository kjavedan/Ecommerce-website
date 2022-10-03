import styled from 'styled-components'

const StyledSidebar = styled.aside`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
height: 100vh;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 3;
background-color: red;
overflow: hidden;

@media (min-width: 900px){
    top:100px;
    width: 20%;
}
`

export const SidebarToggler = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
position: absolute;
right: -25px;
top: 50px;
cursor: pointer;
display: none;

@media (min-width: 900px){
    display: block;
}
`

export default StyledSidebar