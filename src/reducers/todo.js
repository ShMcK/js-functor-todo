import { Reducer } from '../functors'

export const ADD_TODO = 'ADD_TODO'

export default Reducer((state, action) => {
  switch (action.type) {

     case ADD_TODO:
      const nextTodo = { id: 0, title: action.payload.title }
      return Object.assign({}, state, {
        todos: state.todos.concat(nextTodo)
      })

    default:
      return state
  }
})
