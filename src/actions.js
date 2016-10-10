import { ADD_TODO } from './reducers/todo'
import { SET_VISBILITY_FILTER } from './reducers/filter'

export const addTodo = ({title}) => ({ type: ADD_TODO, payload: {title } })

export const setVisibilityFilter = () => ({ type: SET_VISBILITY_FILTER })
