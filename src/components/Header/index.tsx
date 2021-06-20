import React from 'react'
import CompanyLogo from '../Logo'
import styled from 'styled-components'

const HeaderSection = styled.header`
background: black;
height:6vh;
`
export const Header = () => {
  return (
    <div>
      <HeaderSection>
        <CompanyLogo size="small" />
      </HeaderSection>
    </div>
  )
}


