import React from 'react'
import styled from 'styled-components';
import { InfoSectionsProps } from '../../types';

const InfoContainer = styled.div`
background: #ffd460;
margin-top:-1rem;
height:50vh;
padding:2rem;
text-align:right;

`
const InfoHeader = styled.h2`
font-size:2rem;

`
const InfoSubHeader = styled.h3``
const InfoImage = styled.header``
const InfoImageDescription = styled.header``
const InfoCta = styled.header``
const InfoCtaDescription = styled.header``

export const Statement = (props: InfoSectionsProps) => {
  const { header, subheader } = props
  return (
    <InfoContainer>
      <InfoHeader>{header}</InfoHeader>
      <InfoSubHeader>{subheader}</InfoSubHeader>
    </InfoContainer>
  )
}


