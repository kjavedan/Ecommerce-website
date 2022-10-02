import styled from 'styled-components'

const Button = styled.button`
    border: none;
    background-color: ${({theme})=> theme === '#fff' ? '#EAE6FC' : '#2E2E2E'};
    border-radius: 8px;
    font-size: .9rem;
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    color: #7B6AB7;
    padding: 0 .7rem;
    height: 45px;
    display: flex;
    align-items: center;
    margin: 0 .5rem;

    &:hover{
        background-color: #DBD1FF;
    }
`
export default Button