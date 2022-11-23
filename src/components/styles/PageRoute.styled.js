import styled from 'styled-components'

export const StyledPageRoute = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
color: #bababa;
padding-left: 0.8rem;

span{
    font-size: .8rem;
    font-family: 'Poppins';
    padding-left: .4rem;
}

@media (min-width: 900px){
    padding-left: 3.2rem;
    font-size: 1.5rem;
}
`