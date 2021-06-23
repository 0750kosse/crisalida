import React from 'react'
import { Burguer } from '../index'
import { render } from '@testing-library/react'

describe('Burguer icon', () => {
  it('should render', () => {
    const wrapper = render(<Burguer />)
    expect(wrapper).toMatchSnapshot()
  })
})