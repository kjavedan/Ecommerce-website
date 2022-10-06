import styled from 'styled-components'

export const Items = styled.div`
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
`
export const Parent = styled.div`
    padding:.4rem 0;
    border-bottom: 1px solid ${({theme})=> theme === '#fff' ? '#E8E6E6' : '#2E2E2E'};
    padding-left: .3rem;
    `
export const Children = styled.div`
    height: ${({display}) => display ? 'auto' : 0};
    transition: all linear .2s ;
    overflow: hidden;
`
