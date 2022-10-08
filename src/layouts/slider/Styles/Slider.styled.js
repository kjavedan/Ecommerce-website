import styled from 'styled-components'

export const StyledSlider = styled.div`
width: 100%;
height: 300px;
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: space-between;

`

export  const StyledTitle = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: space-between;
padding-left: .8rem;
padding-right: .8rem;
align-items: center;

h2{
    text-transform: capitalize;
}
p{
    text-decoration: underline;
    cursor: pointer;
}
`