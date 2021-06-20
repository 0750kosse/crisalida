import React from 'react'
import CompanyLogo from '../index'
import { render } from '@testing-library/react'

describe('CompanyLogo', () => {
  it('should render in small size', () => {
    const wrapper = render(<CompanyLogo size="small" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render in small size', () => {
    const wrapper = render(<CompanyLogo size="medium" />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render in small size', () => {
    const wrapper = render(<CompanyLogo size="large" />)
    expect(wrapper).toMatchSnapshot()
  })
})