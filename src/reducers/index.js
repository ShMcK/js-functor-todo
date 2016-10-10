import filterReducer from './filter'
import todoReducer from './todo'

const reducers = 
  filterReducer
    .concat(todoReducer)
    .contramap(action => Object.assign({filter: 'all'}, action))
    .map(s => Object.assign({}, s, {lastUpdated: Date()}))

export default reducers
