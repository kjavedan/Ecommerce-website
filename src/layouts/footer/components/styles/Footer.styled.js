import styled from 'styled-components'

const StyledFooter = styled.footer`
background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'};
height: 450px;
width: 100vw;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
z-index: 2;
position: relative;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
padding: 1rem;
`

const Container = styled.div`
padding: 1rem;
height: 200px;
min-width: 150px;
h3{
    margin-bottom: 1rem;
}
p{
    margin-top: .5rem;
}
input{
    margin-bottom: .7rem;
    border: none;
    outline: none;
    width: 230px;
    height: 40px;
    padding-left: .7rem;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    background-color: #fff;
}
`


export {StyledFooter, Container}