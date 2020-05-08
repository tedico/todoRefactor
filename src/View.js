// import { p } from './views'



// div.wrapper
    // h2 i.farfa-tasks
    // ul#todos
        // todo li's
    // end todos
    // form#form-todos
        // input type=text
        // input type=submit
        // input type=submit
    // end form
// end wrapper

function p() {
  const p = document.createElement('p')
  p.textContent = "🏄🏄🏄"
  return p
}

function h2 () {
  const h2 = document.createElement('h2')
  h2.textContent = "Todo App"
  return h2
}

function ul() {
  const ul = document.createElement('ul')
  ul.className = "todos"
  ul.id = "todos"
  return ul
}

function i () {
  const i = document.createElement('i')
  i.className = "far fa-tasks"
  return i
}

function input(type, name, ) {
  const input = document.createElement('input')
  input.type = "text"
  input.name = "item"
  input.placeholder = "Add Your Todo Item..."
  input.required = true
  return input
}


function formSet() {
  const form = document.createElement('form')
  form.className = "form-todos"
  form.id = "form-todos"
  document.addEventListener('submit', dispatch(msg))
  return form
}

function view(dispatch, model) {
  let wrapper = document.createElement('div')
  wrapper.className = "wrapper"
  wrapper.appendChild(p())
  return wrapper
}


export default view

