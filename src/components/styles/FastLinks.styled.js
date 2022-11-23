import styled from 'styled-components'

export const StyledFastLinks = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 1rem;
    color: ${({theme}) => theme === '#fff' ? '#000' : '#B4B4B4'};
    margin-bottom: .7rem;

    h4{
        width: 80px;
        background-color: red;
    }
    
    @media (min-width: 900px){
        padding-left: 3.3rem;
        display: ${({isHomePage}) => isHomePage ? 'none': 'flex'};
    }
`

export const StyledFastLinksContainer = styled.div`
    margin-left: 1rem;
    height: 100%;
    width: 92%;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar{
        display: none;
    }
`

