import {
  p,
  h2,
  ul,
  li,
  label,
  span,
  i,
  input,
  formSet
} from './views/views'

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

function view(dispatch, model) {
  let wrapper = document.createElement('div')
  wrapper.className = "wrapper"
  wrapper.appendChild(h2())
  wrapper.appendChild(ul())
  wrapper.appendChild(formSet())

  return wrapper
}


export default view

