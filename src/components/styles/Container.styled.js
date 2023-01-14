import styled from 'styled-components'

const StyledContainer = styled.div`
width: 150%;
min-height : 100vh;
background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};


@media (min-width: 330px) {
    width: 120%;
}

@media (min-width: 400px) {
    width: 100%;
}
`

export default StyledContainer