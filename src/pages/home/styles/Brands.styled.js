import styled from 'styled-components'

export const StyledBrands = styled.div`
justify-content: center;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
margin-bottom: 3rem;
`
export const StyledBrand = styled.div`
width: minmax(120, 130px);
height: 130px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer;
text-transform: capitalize;
`
export const StyledCard = styled.div`
width: 100px;
height: 100px;
border-radius: 8px;
background-color: ${({theme})=> theme === '#fff' ? '#F1F1F1' : '#2E2E2E'};
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

img{
    height: 60%;
}
`
export const Title = styled.h2`
margin-left: 1rem;
margin-bottom: 1rem;

@media (min-width: 900px){
    width: 92%;
    margin: 0 auto;
    padding: 1rem;
}
`