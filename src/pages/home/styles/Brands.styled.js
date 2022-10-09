import styled from 'styled-components'

export const StyledBrands = styled.div`
background-color: red;
justify-content: center;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
`
export const StyledBrand = styled.div`
background-color: green;
width: minmax(120, 130px);
height: 130px;
text-align: center;
`
export const StyledCard = styled.div`
width: 100px;
height: 100px;
border-radius: 8px;
background-color: yellow;
box-shadow: 0px 2px 2px rgba(0, 0, 0, .25);
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
`