import React from 'react'
import ReactDOM from 'react-dom'
import Cmp from '../src'

describe('Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Cmp />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
