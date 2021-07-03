import React from 'react'
import { Services } from '../index'
import { render, screen } from '@testing-library/react'
import livingRoom from '../../../lib/images/living-room'

describe('Services component', () => {
  it('should render', () => {
    const wrapper = render(<Services />)
    expect(wrapper).toMatchSnapshot()
  })
  it('images should have alt description', () => {
    let altText;
    render(<Services altText="Kitchen" />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', altText)
  })
})



