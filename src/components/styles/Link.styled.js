import styled from 'styled-components'

export const StyledLink = styled.div`
    margin-right: 2rem;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    span{
        margin-left: .5rem;
        font-weight: 600;
        font-size: .8rem;
    }

    div{
        width: 40px;
        height: 100%;
        border-radius: 4px;
        background-color: #F1F1F1;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme})=> theme === '#fff' ? '#F4F4F4' : '#2E2E2E'}
    }
`