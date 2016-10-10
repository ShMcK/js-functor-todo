import Reducer from '../utils/Reducer'

export const todoReducer = Reducer((state, action) => {
  switch (action.type) {
     case 'new_todo':
      const t = { id: 0, title: action.payload.title }
      return Object.assign({}, state, {
        todos: state.todos.concat(t)
      })
    default:
      return state
  }
})

export default todoReducer
