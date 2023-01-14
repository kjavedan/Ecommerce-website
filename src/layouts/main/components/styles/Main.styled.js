import styled from 'styled-components'

const StyledMain = styled.main`
min-height: 100vh;
margin-top: 50px;
width: ${({displaySidebar}) => displaySidebar ? 'calc(100% - 240px)' : '100%'};

@media (min-width: 900px) {
    margin-left: auto;
    margin-top: 80px;
}
`

export default StyledMain