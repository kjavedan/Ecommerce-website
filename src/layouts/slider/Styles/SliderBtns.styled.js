import styled from 'styled-components'

export const PrevBtn = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
font-size: 2rem;
align-items: center;
justify-content: center;
position: absolute;
top: 35%;
left: 10px;
cursor: pointer;
z-index: 8;
display: none;
color: #7B6AB7;
border: none;

&:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow .2s;
}

&:active {
  transform: scale(.96);
}

@media (min-width: 900px){
    display: flex;
}
`

export const NextBtn = styled(PrevBtn)`
left: inherit;
right: 10px;
/* transform: translateY(-50%); */
`

