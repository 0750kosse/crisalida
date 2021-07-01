import React from 'react'
import styled from 'styled-components'
import { ServicesProps } from '../../types'
import { mediaQueries } from '../../mediaqueries'

const ServiceContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:-15vh 0 25vh 0;
${mediaQueries("tablet")`
  position: relative;
  align-items: center;
  `}
`

const Image = styled.img`
width:90vw;
${mediaQueries("tablet")`
  width:45vw;
  `}
${mediaQueries("xxl")`
  width:39vw;
  `}
`

const CtaText = styled.h2`
margin:-1vh 0 3vh 0;
`

const Button = styled.a`
font-size:1rem;
border-bottom: 1px solid #ffd460;
&:hover {
  color: #ffd460;
  border-bottom:1px solid #2d4059;
  }
`

export const Services = (props: ServicesProps) => {
  const { image, cta, ctaText } = props;
  return (
    <ServiceContainer>
      <Image src={image} alt="Service image" />
      <CtaText>{ctaText}</CtaText>
      <Button>{cta}</Button>
    </ServiceContainer>
  )
}
