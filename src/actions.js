import {
  TODO_ADD,
  TODO_TOGGLE_PROP,
} from './reducers/todo'
import { FILTER_SET } from './reducers/filter'

export const todoAdd = (title) => ({
  type: TODO_ADD,
  payload: { title }
})

export const todoToggleProp = (key, id) => ({
  type: TODO_TOGGLE_PROP,
  payload: { key, id },
})

export const filterSet = (filter) => ({
  type: FILTER_SET,
  filter,
})
