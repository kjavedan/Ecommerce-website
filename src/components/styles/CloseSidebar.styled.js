import styled from "styled-components";


const StyledCloseSidebar = styled.div`
position: absolute;
width: 100px;
height: 2rem;
display: flex;
align-items: center;
font-size: 1.2rem;
margin-top: 1rem;
right: 4%;
font-weight: bold;
cursor: pointer;

span{
    margin-right: 1.2rem;
}
@media (min-width: 900px) {
    display: none;
}
`

export default StyledCloseSidebar