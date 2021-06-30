import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { BurguerIconProps } from '../../types'

const Icon = styled.button<BurguerIconProps>`
position: absolute;
right: 12vw;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-top: 0.5rem;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
&:focus {
    outline: none;
  }
  ${mediaQueries("portrait")`
  display:none;
 `}
`
const IconLine = styled.div<{ open?: boolean }> `
width: 2rem;
height: 0.2rem;
background: #3B444B;
transition: all 0.3s linear;
position: relative;
transform-origin: 1px;
:first-child {
  transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
}
:nth-child(2) {
  opacity: ${props => props.open ? '0' : '1'};
  transform: ${props => props.open ? 'translateX(20px)' : 'translateX(0)'};
}
:nth-child(3) {
  transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
}
`

export const Burguer = ({ open, setOpen }: BurguerIconProps) => {
  return (
    <Icon open={open} setOpen={setOpen} onClick={() => setOpen(!open)} >
      <IconLine open={open} />
      <IconLine open={open} />
      <IconLine open={open} />
    </Icon >
  )
}


