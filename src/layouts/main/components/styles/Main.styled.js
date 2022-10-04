import styled from 'styled-components'

const StyledMain = styled.main`
min-height: 100vh;
margin-left: auto;
width: ${({displaySidebar}) => displaySidebar ? '80%' : '100%'};
`

export default StyledMain