import styled from 'styled-components'

const StyledFilterBtn = styled.button`
height: 40px;
width: 85px;
background-color: #2C00D5;
color: white;
border: none;
border-radius: 8px;
font: 400 .8rem 'poppins';
display: inline-flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
    background-color: #2500B4;
}

@media (min-width: 900px){
    display: none;
}
`

export default StyledFilterBtn