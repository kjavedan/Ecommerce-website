import React from 'react'
import {StyledHero, HeroImages, BackgroundImage, BrandImage} from '../styles/Hero.styled'

const Hero = () => {
  return (
    <StyledHero>
        <HeroImages>
            <div> </div>  
            <BrandImage src='../../../../images/samsung-hero-2.jpg' />
        </HeroImages>
        
        {/* <Navbar></Navbar> */}
    </StyledHero>
  )
}

export default Hero