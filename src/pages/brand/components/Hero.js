import React from 'react'
import {StyledHero, HeroImages, BackgroundImage, BrandImage} from '../styles/Hero.styled'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <StyledHero>
        <HeroImages>
            <BrandImage src='../../../../images/samsung-hero-2.jpg' />
        </HeroImages>
        
        <Navbar></Navbar>
    </StyledHero>
  )
}

export default Hero