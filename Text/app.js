
import Text from './src/Text'

export const initApp = (id) => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error('Element not found')
  }
  Text(element)
}