import styled from 'styled-components'


export const StyledPageRoute = styled.ul`
width: 100%;
height: 50px;
display: flex;
align-items: center;
padding-left: 0.8rem;

@media (min-width: 900px){
    padding-left: 3.2rem;
    font-size: 1.5rem;
}
`

export const LinkStyles = {
    fontSize: '.9rem',
    fontFamily: 'Poppins',
    paddingLeft: '.4rem',
    textDecoration: 'none',
    color:'#7B6AB7',
    lineHeight: '1rem',
    fontWeight: '600'
   
}