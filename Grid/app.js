import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './src/Grid'

export const initApp = (id) => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error('Element not found')
  }
  ReactDOM.render(
    React.createElement('div', null, <Grid />),
    element
  )
}