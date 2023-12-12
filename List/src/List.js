const List = (element, data) => {
  element.innerHTML = ''

  const ul = document.createElement('ul')
  element.appendChild(ul)
  data.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
  })
}
export default List;