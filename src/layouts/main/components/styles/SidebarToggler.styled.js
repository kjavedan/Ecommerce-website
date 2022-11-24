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

box-shadow: ${({theme})=> theme === '#fff' ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'};
`
