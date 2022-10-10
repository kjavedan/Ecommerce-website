import styled from 'styled-components'

export const StyledSlider = styled.div`
width: 100%;
height: 320px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
margin-bottom: 3rem;
`

export  const StyledTitle = styled.div`
width: 100%;
height: 15%;
display: flex;
justify-content: space-between;
padding-left: 1rem;
padding-right: 1rem;
align-items: center;

@media (min-width: 900px){
    width: 90%;
    margin: 0 auto;
}

h2{
    text-transform: capitalize;
}
p{
    text-decoration: underline;
    cursor: pointer;
}
`