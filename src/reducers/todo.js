import { Reducer } from '../functors'

export const TODO_ADD = 'TODO_ADD'
export const TODO_TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE'

let id = 2;

export default Reducer((state, action) => {
  console.log(state)
  switch (action.type) {

    case TODO_ADD:
      const { title } = action.payload;
      const nextTodo = { id: ++id, title, isComplete: false  }
      return Object.assign({}, state, {
        todos: state.todos.concat(nextTodo)
      })

    case TODO_TOGGLE_COMPLETE:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.isComplete = !todo.isComplete
          }
          return todo
        })
      })

    default:
      return state
  }
})
