import styled from 'styled-components'

export const StyledCategory = styled.div`
    margin-top: 1rem;
    height: ${({display}) => display ? 'auto' : '2rem'};
    overflow: hidden;

    p{
        float: right;
        text-decoration: underline;
        cursor: pointer;
        margin-top: .5rem;
    }
`
