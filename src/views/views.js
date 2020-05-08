export function p() {
  const p = document.createElement('p')
  p.textContent = "🏄🏄🏄"
  return p
}

export function h2 () {
  const h2 = document.createElement('h2')
  h2.textContent = "Todo App"
  return h2
}

export function ul() {
  const ul = document.createElement('ul')
  ul.className = "todos"
  ul.id = "todos"
  ul.addEventListener('submit', () => dispatch(addTodoMsg(text)))
  return ul
}

export function li() {
  const li = document.createElement('li')
  return li
}

export function label() {
  const label = document.createElement('label')
  label.for = "test"
  return label
}

export function span() {
  const span = document.createElement("span")
  span.className = `${todo.done ? "done" : ''}`
  return span
}

export function i () {
  const i = document.createElement('i')
  i.className = "far fa-tasks"
  return i
}

export function input(type, name, ) {
  const input = document.createElement('input')
  input.type = "text"
  input.name = "item"
  input.placeholder = "Add Your Todo Item..."
  input.required = true
  return input
}


export function formSet() {
  const form = document.createElement('form')
  form.className = "form-todos"
  form.id = "form-todos"
  document.addEventListener('submit', () => dispatch(msg))
  return form
}