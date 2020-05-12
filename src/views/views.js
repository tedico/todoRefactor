export const h2 = (text, child) => {
  const h2 = document.createElement('h2')
  h2.textContent = text
  h2.appendChild(child())
  return h2
}
export const i = (className, data) => {
  const i = document.createElement('i')
  i.className = className
  // dataset = data 
  return i
}


export function ul(dispatch, className, id, model) {
  const ul = document.createElement('ul')
  ul.className = className//"todos"
  ul.id = id //"todos"
  ul.addEventListener('click', () => e.target.tagName === 'SPAN' ? dispatch(toggleCompleteTodoMsg(id)) : dispatch(completeTodoMsg(id)))
  return ul
}

export const li = (span, label, i) => {
  return (
    
  )
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
 // ========================================================

 // export function p() {
//   const p = document.createElement('p')
//   p.textContent = "🏄🏄🏄"
//   return p
// }


// export function h2(text,tag) {
//   const h2 = document.createElement('h2')
//   h2.textContent = text
//   h2.appendChild(tag()) // suppose to be i("far fa-tasks")
//   return h2
// }


// export function i(className) {
//   const i = document.createElement('i')
//   i.className = className//"far fa-tasks"
//   return i
// }