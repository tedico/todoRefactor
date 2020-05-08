const MSGS = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS'
}

// notice that each of the parameters taken is a property from my model
// export function addTodoMsg(text) {
//   return {
//     type: MSGS.ADD_TODO,
//     text,
//   }

// }

// export function completeTodoMsg(id) {
//   return {
//     type: MSGS.COMPLETE_TODO,
//     done: !done
//   }
// }

// export function removeTodoMsg(id) {
//   return {
//     type: MSGS.REMOVE_TODO,
//     id,

//   }
// }

// export function removeAllTodoMsg(???) {
//   return {
//     type: MSGS.REMOVE_ALL_TODOS,
//     // I just empty out the entire array
//   }
// }



function updateState(msg, model) {
  switch (msg.type) {

    case MSGS.SHOW_FORM: {
      const { showForm } = msg
      return { ...model, showForm, description: '', calories: 0 }
    }

    case MSGS.CALORIES_INPUT: {
      const calories = R.pipe(
        parseInt,
        R.defaultTo(0)
      )(msg.calories)
      return { ...model, calories }
    }

    case MSGS.MEAL_INPUT: {
      const { description } = msg
      return { ...model, description }
    }

    case MSGS.SAVE_MEAL: {
        const { editId } = model
        const updatedModel = editId !== null ?
          edit(msg, model) :
          add(msg, model)
        return updatedModel
      }

    case MSGS.DELETE_MEAL: {
      const { id } = msg
      const meals = R.filter(
        (meal) => meal.id !== id
        ,model.meals)
        return {...model, meals }
    }

    case MSGS.EDIT_MEAL: {
      const { editId } = msg
      const meal = R.find(
        (meal) => meal.id === editId,
        model.meals)

      const { description, calories } = meal
        return {
          ...model, // spreads the existing model
          editId, // I now override this prop...
          description, // and this prop...
          calories, // and this prop...
          showForm: true, // and this prop
        }
      }

      default:
        return model
  }
}

function add(msg, model) {
  const { nextId, description, calories } = model
  const meal = { id: nextId, description, calories }
  const meals = [...model.meals, meal]
  return {
    ...model,
    meals,
    nextId: nextId + 1,
    description: '',
    calories: 0,
    showForm: false
  }
}

function edit(msg, model) {
  const { description, calories, editId } = model 
  const meals = R.map((meal) => {
    if (meal.id === editId) {
      return { ...meal, description, calories }
    } else {
      return meal
    }
  }, model.meals)
  return {
    ...model,
    meals,
    description: '',
    calories: 0,
    showForm: false,
    editId: null
  }
}

export default updateState