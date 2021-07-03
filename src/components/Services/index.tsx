import React from 'react'
import styled from 'styled-components'
import { ServicesProps } from '../../types'
import { mediaQueries } from '../../mediaqueries'

const ServiceContainer = styled.div`
z-index:0;
display:flex;
flex-direction:column;
align-items: center;
margin:-15vh 0 25vh 0;
text-align:center;
${mediaQueries("tablet")`
  position: relative;
  align-items: center;
  `}
`

const ImageWrapper = styled.div`
width: 90%;
height: 90%;
margin: 0;
padding: 0;
background: #fff;
overflow: hidden;
`

const Image = styled.img`
width:90vw;
transform: scale(1);
transition: .3s ease-in-out;
&:hover {
  transform: scale(1.3);
}
${mediaQueries("tablet")`
  width:45vw;
  `}
${mediaQueries("xxl")`
  width:39vw;
  `}
`

const CtaText = styled.h1`
margin:-1vh 0 3vh 0;
z-index:3;
`

const Button = styled.a`
font-size:1.5rem;
border-bottom: 1px solid #ffd460;
&:hover {
  color: #ffd460;
  border-bottom:1px solid #2d4059;
  }
`

export const Services = (props: ServicesProps) => {
  const { image, cta, ctaText, altText } = props;
  return (
    <ServiceContainer>
      <ImageWrapper>
        <Image src={image} alt={altText} />
      </ImageWrapper>
      <CtaText>{ctaText}</CtaText>
      <Button>{cta}</Button>
    </ServiceContainer>
  )
}
