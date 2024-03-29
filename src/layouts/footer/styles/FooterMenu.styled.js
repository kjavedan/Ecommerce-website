import styled from 'styled-components'

const StyledMenu = styled.div`
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
position: fixed;
bottom: 0;
left: 0;
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.5rem;
color: #898989;
z-index: 12;

@media (min-width: 900px){
    display: none;
}
`

export default StyledMenu