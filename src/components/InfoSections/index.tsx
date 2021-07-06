import React from 'react'
import styled from 'styled-components';
import { mediaQueries } from '../../mediaqueries'
import { InfoSectionsProps } from '../../types';

const InfoContainer = styled.div < { primary?: boolean } > `
display:flex;
flex-direction:column;
justify-content:center;
background: ${props => props.primary ? '#ffd460' : '#f07b3f'};
padding:${props => props.primary ? '6rem 2rem' : '1rem 2rem'};
margin-top:${props => props.primary ? '0' : '-5%'};
text-align:right;
height:50vw;
${mediaQueries("xxl")`
height:30vw;`}
`

const InfoHeader = styled.h2`
margin-top:10%;
${mediaQueries("tablet")` 
  font-size:4.5vw;
  width:60vw;
  margin-left:20vw;
  `}
${mediaQueries("xxl")`
  font-size:3.5vw;
  text-align:center;
  width: 80%;
  margin: 0 auto;
  `}
`

const InfoSubHeader = styled.h3`
margin-bottom:5%;
${mediaQueries("tablet")` 
font-size:2.5vw;
  width:60vw;
  margin-left:20vw;
  margin-bottom:10%;
`}
${mediaQueries("xxl")`
margin-bottom:0;
text-align:center;
margin-left:0vw;
width:100%;
 `}
`

export const InfoSection = (props: InfoSectionsProps) => {
  const { header, subheader, primary } = props
  return (
    <InfoContainer primary={primary}>
      <InfoHeader>{header}</InfoHeader>
      <InfoSubHeader>{subheader}</InfoSubHeader>
    </InfoContainer>
  )
}


