
function app(initModel, updateState, view, node) {
  let model = initModel // will hold my app state
  let currentView = view(dispatch, model)
  node.appendChild(currentView)

  // hoisted. closure. in scope when I import it.
  function dispatch(msg) { // when there's a UI interaction this will update my model/state then my view to reflect current state
    model = updateState(msg, model)
    const updatedView = view(dispatch, model)
    node.replaceChild(updatedView, currentView)
    currentView = updatedView
  }
}

export default app
