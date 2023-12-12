
import List from './src/List'

export const initApp = (id, data = []) => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error('Element not found')
  }
  List(element, data)
}