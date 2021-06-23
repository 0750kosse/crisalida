import React from 'react'
import { NavBar } from '../index'
import { render, screen } from '@testing-library/react'

const links = [
  { text: 'Ventas', href: '/ventas' },
  { text: 'Servicios', href: '/servicios' },
  { text: 'Conocenos', href: '/conocenos' },
  { text: 'Contacta', href: '/contacta' }
]

describe('should render', () => {
  it('Navbar component', () => {
    const wrapper = render(<NavBar />)
    expect(wrapper).toMatchSnapshot();
  })
  it('some text', () => {
    const { getByText } = render(<NavBar />)
    expect(screen.getByText("Contacta")).toBeInTheDocument()
  })
})
