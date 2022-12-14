import styled from 'styled-components'

export const SidebarTogglerClose = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
position: fixed;
top: 128px;
transform: translateX(-50%);
cursor: pointer;
display: none;
z-index: 12;



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
top: 118px;
transform:translateX(0);
box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 2px 2px;
`
