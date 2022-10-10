import styled from 'styled-components'

export const PrevBtn = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
font-size: 2rem;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 35%;
left: 10px;
cursor: pointer;
z-index: 8;
display: none;
color: #7B6AB7;

@media (min-width: 900px){
    display: flex;
}
`

export const NextBtn = styled(PrevBtn)`
left: inherit;
right: 10px;
/* transform: translateY(-50%); */
`