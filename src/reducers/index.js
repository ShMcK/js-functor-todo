import R from 'ramda'
import filterReducer from './filter'
import todoReducer from './todo'

const reducers = 
  filterReducer
    .concat(todoReducer)
    .map(s => R.merge(s, { lastUpdated: Date() }))

export default reducers
