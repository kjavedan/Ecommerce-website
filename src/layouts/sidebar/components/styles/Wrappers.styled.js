import styled from 'styled-components'

export const Wrapper = styled.div`
width: 85%;
margin: .5rem auto;
padding-bottom: 8rem;
`
export const CategoryWrapper = styled.div`
    margin-top: 1rem;
    /* background-color: yellowgreen; */
    height: ${({display}) => display ? 'auto' : '2rem'};
    overflow: hidden;
`
