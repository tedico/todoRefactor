const MSGS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETE_TODO: 'TOGGLE_COMPLETE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS'
}


export function addTodoMsg(text) {
  return {
    type: MSGS.ADD_TODO,
    text,
  }

}

export function toggleCompleteTodoMsg(id) {
  return {
    type: MSGS.COMPLETE_TODO,
    done: !done
  }
}

export function removeTodoMsg(id) {
  return {
    type: MSGS.REMOVE_TODO,
    id,

  }
}

export function removeAllTodoMsg() {
  return {
    type: MSGS.REMOVE_ALL_TODOS,
    // I just empty out the entire array
  }
}


function updateState(msg, model) {
  switch (msg.type) {

    case MSGS.ADD_TODO: {
      return
    }

    case MSGS.TOGGLE_COMPLETE_TODO: {
      return
    }

    case MSGS.REMOVE_TODO: {
      return
    }

    case MSGS.REMOVE_ALL_TODOS: {
      return
    }

      default:
        return model
  }
}


export default updateState