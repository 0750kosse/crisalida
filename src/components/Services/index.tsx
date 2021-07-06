import React from 'react'
import styled from 'styled-components'
import { ServicesProps } from '../../types'
import { mediaQueries } from '../../mediaqueries'

const ServiceContainer = styled.div`
z-index:0;
display:flex;
flex-direction:column;
align-items: center;
margin: -10vh 0 5vh 0;
text-align:center;
margin-top: -15%;
${mediaQueries("tablet")`
  position: relative;
  align-items: center;
 `}
 ${mediaQueries("xxl")`
  margin-top:-10%;
 `}
 `

const ImageWrapper = styled.div`
width: 90%;
height: 90%;
margin: 0;
padding: 0;
background: #B8B8B8;
overflow: hidden;
box-shadow: #b8b8b8 1px 1px 10px;
border-radius:5px;
`

const Image = styled.img`
width:130vw;
transform: scale(1);
transition: .3s ease-in-out;
&:hover {
  transform: scale(1.3);
}
${mediaQueries("tablet")`
  width:45vw;
  height: 50vw;
  `}
${mediaQueries("xxl")`
  width:28vw;
  height:40vh;
  `}
`

const CtaText = styled.h1`
margin:-2vh 0 3vh 0;
font-size:1.8rem;
z-index:3;
${mediaQueries("xl")`
  font-size:2rem;
  `}
`

const Button = styled.a`
margin-bottom:15%;
font-size:1.4rem;
border-bottom: 2px solid #ffd460;
&:hover {
  color: #ffd460;
  border-bottom:2px solid #2d4059;
  }
`

export const Services = (props: ServicesProps) => {
  const { image, cta, ctaText, altText } = props;
  return (
    <ServiceContainer className="Services">
      <ImageWrapper>
        <Image src={image} alt={altText} />
      </ImageWrapper>
      <CtaText>{ctaText}</CtaText>
      <Button>{cta}</Button>
    </ServiceContainer>
  )
}
