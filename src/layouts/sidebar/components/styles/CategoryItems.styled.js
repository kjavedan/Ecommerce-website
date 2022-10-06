import styled, {css} from 'styled-components'

export const Items = styled.div`
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
`
export const Parent = styled.div`
    padding:.4rem 0;
    border-bottom: 1px solid lightgrey;
    padding-left: .3rem;
    `
export const Children = styled.div`
    height: ${({display}) => display ? 'auto' : 0};
    transition: all linear .2s ;
    overflow: hidden;
`
export const Child = styled.div`
    height: 36px;
    padding-left: .5rem;
    display: flex;
    align-items: center;
    font-size: .8rem;
`