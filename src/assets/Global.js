import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Poppins',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Poppins';
  }
  h1,h4,p{
    font-weight: 500;
  }
  h2,h3,h5{
    font-weight: 600;
  }

  h1{
    font-size: 1rem;
    color: ${({theme}) => theme === '#fff' ? '#000' : '#D9D9D9'};
  }
  h2{
    font-size: 1.2rem;
    color: ${({theme}) => theme === '#fff' ? '#171616' : '#D9D9D9'};
  }
  h3{
    font-size: 1.2rem;
    color: ${({theme}) => theme === '#fff' ? '#373636' : '#D9D9D9'};
  }
  h4{
    font-size: 1.2rem;
    color: ${({theme}) => theme === '#fff' ? '#969494' : '#969494'};
  }
  h5{
    font-size: .6rem;
    color: ${({theme}) => theme === '#fff' ? '#171616' : '#D9D9D9'};
  }
  h6{
    font-size: .5rem;
    font-weight: 400;
    color: ${({theme}) => theme === '#fff' ? '#171616' : '#D9D9D9'};
  }
  p{
    font-size: .9rem;
    color: #969494;
  }

  button{
  
  }
  
  @media (min-width: 600px) {
    h1{
    font-size: 2rem;
    color: ${({theme}) => theme === '#fff' ? '#000' : '#D9D9D9'};
  }
    h2{
      font-size: 1.5rem;
    }
    h3,h4{
      font-size: 1.4rem;
    }
    h5{
      font-size: 1.3rem;
    }
    h6{
      font-size: .9rem;
    }
    p{
      font-size: 1.1rem;
    }
  }
}
`

export default GlobalStyles;