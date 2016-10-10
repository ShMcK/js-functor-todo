import { ADD_TODO } from './reducers/todo'
import { SET_VISIBILITY_FILTER } from './reducers/filter'

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title }
})

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})
