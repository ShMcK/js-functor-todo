import R from 'ramda'
import filterReducer from './filter'
import todoReducer from './todo'

const combineReducers = R.compose(x => R.tail(x).reduce((a, b) => a.concat(b), R.head(x)), R.values)

export default combineReducers({
  todos: todoReducer,
  filter: filterReducer,
})
  .map(s => R.merge(s, { lastUpdated: Date() }))
