import Header from './Header'
import Todos from './Todos'

export default
  Header
  .concat(Todos)
  // initialize with values
  .fold({
    title: 'TodoApp'
  })

