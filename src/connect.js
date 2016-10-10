import { withReducer } from 'recompose'
import { Hoc } from './functors'
import reducers from './reducers/index'
import state from './state'

export default Hoc(withReducer('state', 'dispatch', reducers.fold, state))
