import { Reducer } from '../functors'

export const ADD_TODO = 'ADD_TODO'

export const todoReducer = Reducer((state, action) => {
  switch (action.type) {
     case ADD_TODO:
      const t = { id: 0, title: action.payload.title }
      return Object.assign({}, state, {
        todos: state.todos.concat(t)
      })
    default:
      return state
  }
})

export default todoReducer
