import appReducer from './App/reducer'
import todoReducer from './TodoList/reducer'

const reducers = 
  appReducer
    .concat(todoReducer)
    .contramap(action => Object.assign({filter: 'all'}, action))
    .map(s => Object.assign({}, s, {lastUpdated: Date()}))

export default reducers
