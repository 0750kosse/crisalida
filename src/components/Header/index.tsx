import React, { useState } from 'react'
import CompanyLogo from '../Logo'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { Burguer } from '../BurguerIcon'
import { NavBar } from '../NavBar'

const HeaderSection = styled.header`
position:fixed;
display:flex;
flex-direction:row;
max-width: 1980px;
width: 100%;
margin: 0;
padding: 1rem 0;
background:#ffd460;
${mediaQueries("tablet")`
  z-index:1;
  justify-content: space-between;
  align-items: center;
  `}
`

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <HeaderSection>
        <CompanyLogo size='small' />
        <Burguer open={open} setOpen={setOpen} />
        <NavBar open={open} setOpen={setOpen} />
      </HeaderSection>
    </>
  )
}


