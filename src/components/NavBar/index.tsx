import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { NavBarProps } from '../../types'

const NavBarLinkContainer = styled.nav<NavBarProps>`
display: ${props => (props.open ? "flex" : "block")};
flex-direction: ${props => (props.open ? "column" : "block")};
width:${props => (props.open ? "70vw" : "-100vw")};
height: ${props => (props.open ? "100vh" : "0")};
transition: ${props => (props.open ? ".3s" : "0")};
padding: 0 3rem;
position: absolute;
top: 5.45rem;
right: 0;
text-align: left;
background:#001f3f;
color:${props => (props.open ? "#ffd460" : "transparent")};
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
font-size: 1rem;
padding: 2rem 0;
font-weight: bold;
letter-spacing: 0.3rem;
text-decoration: none;
${mediaQueries("portrait")`
font-size:1rem;
padding:0;
color:#001f3f;
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


