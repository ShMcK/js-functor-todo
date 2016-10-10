import { withReducer } from 'recompose'
import { Hoc } from './functors'
import reducers from './reducers'

const initialState = {
  todos: []
}

const store = Hoc(withReducer('state', 'dispatch', reducers.fold, initialState))

export default store
