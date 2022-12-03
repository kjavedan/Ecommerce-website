import React from 'react'
import {StyledHero, HeroImages, BackgroundImage, BrandImage} from '../styles/Hero.styled'
import Navbar from './Navbar'

const Hero = ({background, logo}) => {
  return (
    <StyledHero >
        <HeroImages background={background}>
            <BrandImage src={logo} />
        </HeroImages>
        <Navbar/>
    </StyledHero>
  )
}

export default Hero