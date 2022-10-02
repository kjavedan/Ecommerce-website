import styled from 'styled-components'

const StyledFooter = styled.footer`
background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'};
height: 500px;
width: 100%;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
z-index: 2;
position: relative;
`

const Container = styled.div`
height: 200px;
width: 200px;
padding: 1rem
`
export {StyledFooter, Container}