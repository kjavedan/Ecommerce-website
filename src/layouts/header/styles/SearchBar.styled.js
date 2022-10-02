import styled from 'styled-components'

const StyledSearchBar = styled.div`
height: 35px;
width: 65%;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E' };
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-between;
color: #BEBDBD;

@media (min-width: 800px){
    height: 45px;
    width: 45%;
}

input{
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 0.7rem;
    color: ${({theme}) => theme === '#fff' ? 'black' : 'darkgrey'};
    font: 500 .8rem 'Poppins';
    background-color: transparent;
}
`

export default StyledSearchBar;