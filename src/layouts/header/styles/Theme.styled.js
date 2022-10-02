import styled from 'styled-components'

const StyledTheme = styled.div`
font-size: 1.5rem;
display: flex;
align-items: center;
height: 2rem;
cursor: pointer;
color: ${({theme}) => theme === '#fff' ? 'yellow': '#434242'};

@media (min-width: 800px){
    font-size: 2rem;
}
`
export default StyledTheme