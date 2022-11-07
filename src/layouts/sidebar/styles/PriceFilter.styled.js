import styled from 'styled-components'

export const StyledPriceFilter = styled.div`
margin-top: 1rem;
height: 200px;
`

export const Container = styled.div`
width: 100%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-top: .5rem;
`

export const Input = styled.div`
height: 2rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

span{
    font-family: 'Poppins';
    font-size: .9rem;
}

input{
    width: 70%;
    outline: none;
    border: none;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    border-bottom: 1px solid #706F6F;
    color: ${({theme}) => theme === '#fff' ? '#706F6F' : '#B4B4B4'};
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`