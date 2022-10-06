import styled from 'styled-components'

export const StyledCategory = styled.div`
    margin-top: 1rem;
    height: ${({display}) => display ? 'auto' : '2rem'};
    overflow: hidden;
`
