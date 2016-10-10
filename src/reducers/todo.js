import { Reducer } from '../functors'

export const ADD_TODO = 'ADD_TODO'

let id = 2;

export default Reducer((state, action) => {
  console.log(state)
  switch (action.type) {

    case ADD_TODO:
      const { title } = action.payload;
      const nextTodo = { id: ++id, title }
      return Object.assign({}, state, {
        todos: state.todos.concat(nextTodo)
      })

    default:
      return state
  }
})
