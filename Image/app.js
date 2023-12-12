
import Image from './src/Image'

export const initApp = (id) => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error('Element not found')
  }
  Image(element)
}