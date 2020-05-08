// this is my apps initial state or everytime I add a todo item this is what I'm adding to the array
// const initModel = {
//   id: 0,
//   text: '',
//   done: false,
// }
//  let todos = JSON.parse(localStorage.getItem('todos')) || [];
const initModel = JSON.parse(localStorage.getItem('todos')) || [];

export default initModel

