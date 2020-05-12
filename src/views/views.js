export const div = (attr = {}, text = '', children = []) => {
  const { className, id } = attr
  const div = document.createElement('div')
  div.className = className
  div.id = id

  if (children.length > 0) {
    childrend.forEach((child) => div.appendChild(child))
  }
  return div
}

export const h2 = (attr = {}, text = '', children = []) => {
  const { className } = attr
  const h2 = document.createElement('h2')
  h2.textContent = text
  if (children.length > 0) {
    children.forEach((child) => h2.appendChild(child))
  }
  return h2
}

// I need the dataset attribute on this
export const i = (attr = {}, text = '', children = []) => {
  const { className, data } = attr
  const i = document.createElement('i')
  i.className = className
  data = data // I'm not sure about this - look into this
  if (children.length > 0) {
    children.forEach((child) => i.appendChild(child))
  }
  return i
}


export function ul(attr = {}, text = '', children = []) {
  const { className, id } = attr
  const ul = document.createElement('ul')
  ul.className = className
  ul.id = id
  if (children.length > 0) {
    children.forEach((child) => ul.appendChild(child))
  }
  return ul
}

// why am I not using [].map() instead of [].forEach()
export const li = (attr = {}, text = '', children = []) => {
  const { className } = attr
  const li = document.createElement('li')
  li.className = className
  if (children.length > 0) {
    children.forEach((child) => li.appendChild(child))
  }
  return li
}
 // ugh for is a reserved word
const label = (attr = {}, text = '', children = []) => {
  const {className, checked  } = attr
  const label = document.createElement('label')
  label.id = id
  label.className = className
  label.checked = checked
  return label
}

const span = (attr = {}, text = '', children = []) => {
  const { className } = attr
  const span = document.createElement('span')
  span.className = className
  return span
}

const input = (attr = {}, text = '', children = []) =>  {
  const { type, data, id, className, checked } = attr
  const input = document.createElement('input')
  input.id = id
  input.data = data
  input.className =className
  input.checked = checked || ''
  return input
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

// export function li(attr ={}, text = '', children = []) {
//   const { className } = attr
//   const li = document.createElement('li')
//   if(children.length > 0) {
//     children.forEach((child) => li.appendChild(child))
//   }
//   return li
// }


// export function label() {
//   const label = document.createElement('label')
//   label.for = "test"
//   return label
// }

// export function span() {
//   const span = document.createElement("span")
//   span.className = `${todo.done ? "done" : ''}`
//   return span
// }

// export function input(type, name, ) {
//   const input = document.createElement('input')
//   input.type = "text"
//   input.name = "item"
//   input.placeholder = "Add Your Todo Item..."
//   input.required = true
//   return input
// }