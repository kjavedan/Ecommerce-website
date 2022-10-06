import styled from 'styled-components'

export const Child = styled.div`
    height: 30px;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    font-size: .9rem;
    color: ${({theme}) => theme === '#fff' ? '#969494' : '#969494'};
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`