import React, { useState } from 'react'
import CompanyLogo from '../Logo'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { Burguer } from '../BurguerIcon'
import { NavBar } from '../NavBar'

const HeaderSection = styled.header`
display:flex;
flex-direction:row;
padding: 1rem;
background:red;
${mediaQueries("portrait")`
justify-content: space-between;
align-items: center;
`}
`

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <HeaderSection>
        <CompanyLogo size='small' />
        <Burguer open={open} setOpen={setOpen} />
        <NavBar open={open} setOpen={setOpen} />
      </HeaderSection>
    </div>
  )
}


