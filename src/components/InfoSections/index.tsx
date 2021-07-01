import React from 'react'
import styled from 'styled-components';
import { mediaQueries } from '../../mediaqueries'
import { InfoSectionsProps } from '../../types';

const InfoContainer = styled.div`
background: #ffd460;
margin-top:-.5rem;
padding:6rem 2rem;
text-align:right;
font-size:1.7rem;
${mediaQueries("tablet")`
  height:40vh;
  position: relative;
  `}
`
const InfoHeader = styled.h2`
${mediaQueries("tablet")`
  width: 75vw;
  position: absolute;
  top: 35%;
  left: 50;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
  ${mediaQueries("xxl")`
  width: 60vw;
  `}
`

const InfoSubHeader = styled.h3`
${mediaQueries("tablet")`
  width: 75vw;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
  ${mediaQueries("xxl")`
  width: 60vw;`}
`

export const InfoSection = (props: InfoSectionsProps) => {
  const { header, subheader } = props
  return (
    <InfoContainer>
      <InfoHeader>{header}</InfoHeader>
      <InfoSubHeader>{subheader}</InfoSubHeader>
    </InfoContainer>
  )
}


