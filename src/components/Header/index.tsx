import React, { useState, useEffect } from 'react'
import CompanyLogo from '../Logo'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { Burguer } from '../BurguerIcon'
import { NavBar } from '../NavBar'
import { HeaderProps } from '../../types'

const HeaderSection = styled.header<HeaderProps>`
position:fixed;
display:flex;
flex-direction:row;
max-width: 1980px;
width: 100%;
margin: 0;
padding: 1rem 0;
background:${props => props.scrollY ? 'white' : '#ffd460'};
${mediaQueries("tablet")`
  z-index:1;
  justify-content: space-between;
  align-items: center;
  `}
`

export const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderSection scrollY={scrollY > 30}>
        <CompanyLogo size='small' />
        <Burguer open={open} setOpen={setOpen} />
        <NavBar open={open} setOpen={setOpen} />
      </HeaderSection>
    </>
  )
}


