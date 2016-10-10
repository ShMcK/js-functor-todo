import { TODO_ADD, TODO_TOGGLE_COMPLETE } from './reducers/todo'
import { FILTER_SET } from './reducers/filter'

export const todoAdd = (title) => ({
  type: TODO_ADD,
  payload: { title }
})

export const todoToggleComplete = (id) => ({
  type: TODO_TOGGLE_COMPLETE,
  payload: { id }
})

export const filterSet = (filter) => ({
  type: FILTER_SET,
  filter,
})
