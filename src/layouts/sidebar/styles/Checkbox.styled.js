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

span{
    margin-left: .3rem;
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