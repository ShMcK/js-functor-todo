import { withReducer } from 'recompose'
import { Hoc } from './functors'
import reducers from './reducers/index'

const connect = Hoc(withReducer('state', 'dispatch', reducers.fold))

export default connect
