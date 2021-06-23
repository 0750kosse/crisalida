import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { NavBarProps } from '../../types'

const NavBarLinkContainer = styled.nav<NavBarProps>`
display: ${props => props.open ? 'flex' : 'none'};
flex-direction: column;
padding: 0 3rem;
height: 100vh;
width:50vw;
text-align: left;
position: absolute;
top: 5.45rem;
right: 0;
transition: transform 0.3s ease-in-out;
background:black;
color:white;
${mediaQueries("portrait")`
display:flex;
  position:relative;
  top:0;
  flex-direction:row;
  width:65vw;
  background:transparent;
  justify-content: space-evenly;
  height: 2vh;
  padding:0;
`}
${mediaQueries("xxl")`
width:55vw;
`}
`
const Link = styled.a`
font-size: 2rem;
padding: 2rem 0;
font-weight: bold;
letter-spacing: 0.3rem;
text-decoration: none;
transition: color 0.3s linear;
${mediaQueries("portrait")`
font-size:1rem;
padding:0;
`}
`
const links = [
  { text: 'Ventas', href: '/ventas' },
  { text: 'Servicios', href: '/servicios' },
  { text: 'Conocenos', href: '/conocenos' },
  { text: 'Contacta', href: '/contacta' }

]
export const NavBar = ({ open }: NavBarProps) => {
  return (
    <NavBarLinkContainer open={open}>
      {links.map(link => {
        const { text, href } = link
        return <Link key={href}>{text}</Link>
      })}
    </NavBarLinkContainer>
  )
}


