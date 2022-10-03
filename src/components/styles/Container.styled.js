import styled from 'styled-components'

const StyledContainer = styled.div`
width: 100%;
min-height : 100vh;

background-color: ${({theme})=> theme === '#fff' ? '#fff' : '#212121'};
`

export default StyledContainer