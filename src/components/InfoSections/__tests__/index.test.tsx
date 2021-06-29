import React from 'react'
import { InfoSection } from '../index'
import { render, screen } from '@testing-library/react'

describe('Statement component', () => {
  it('should render', () => {
    const wrapper = render(<InfoSection />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should show some text', () => {
    render(<InfoSection subheader='it IS personal.' />);
    expect(screen.getByText('it IS personal.')).toBeInTheDocument();
  })
  it('should contain a h2 and h3', () => {
    const wrapper = render(<InfoSection />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument()

  })
})
