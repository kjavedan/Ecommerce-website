import styled from 'styled-components'

const Wrapper = styled.div`
height: 85%;
overflow-x: scroll;
overflow-y: hidden;
white-space: nowrap;
width: 100%;
padding-left: 0.5rem;
scroll-behavior: smooth;
scrollbar-width: none;
-ms-overflow-style: none;

&::-webkit-scrollbar{
    display: none;
}

@media (min-width: 900px){
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
}

`
export default Wrapper