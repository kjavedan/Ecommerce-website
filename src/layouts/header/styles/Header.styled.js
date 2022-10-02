import styled from 'styled-components'

const StyledHeader = styled.header`
width: 100%;
height: 100px;
display: flex;
justify-content: space-between;
padding: 0 .5rem;
align-items: center;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
h1{
    font-size: 1.7rem;
    font-family: 'Roboto';
}

@media (min-width: 800px){
    padding: 0 1rem;
    border-bottom: 2px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
}
`

export default StyledHeader