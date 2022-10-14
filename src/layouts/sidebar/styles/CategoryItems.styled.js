import styled from 'styled-components'

export const Items = styled.div`
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
`

export const Children = styled.div`
    display: ${({display}) => display ? 'block' : 'none'};
    transition: all linear .2s ;
    overflow: hidden;
`
