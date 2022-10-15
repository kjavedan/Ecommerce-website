import styled from 'styled-components'


export const StyledCheckbox = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
`

export const Input = styled.input.attrs({type: "checkbox"})`
cursor: pointer;
opacity: 0;
position: absolute;

&:checked + Label::after {
    background-color: rgb(141, 116, 238);
    content: '✔';
    display: flex; 
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    border: none;
    padding: 2px;
}
`

export const Label = styled.label`
display: flex;
cursor: pointer;
width: 100%;
align-items: center;

span{
    color: ${({theme}) => theme === '#fff' ? '#706F6F' : '#B4B4B4'};
    margin-left: .3rem;
    font-size: .9rem;
    font-weight: 400;
    font-family: 'poppins'
}

&::after{
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 5px;
    margin-left: auto;
    font-size: .8rem;
    border: 2px solid #969494;
}

&:hover{
    &::after{
        background-color: rgb(141, 116, 238);
    }
}
`