import styled from 'styled-components'

export const SidebarTogglerClose = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
position: fixed;
top: 120px;
transform: translateX(-50%);
cursor: pointer;
display: none;
z-index: 10;



@media (min-width: 900px){
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: #7B6AB7;
}
`
export const SidebarTogglerOpen = styled(SidebarTogglerClose)`
left: -35px;
width: 70px;
height: 70px;
transform:translateX(0);
`
