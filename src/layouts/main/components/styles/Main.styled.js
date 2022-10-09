import styled from 'styled-components'

const StyledMain = styled.main`
min-height: 100vh;
margin-top: 100px;
margin-left: auto;
background-color:red;
width: ${({displaySidebar}) => displaySidebar ? 'calc(100% - 240px)' : '100%'};
`

export default StyledMain