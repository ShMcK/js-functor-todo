import Header from './Header'
import Todos from './Todos'

export default
  Header
  .concat(Todos)
  .fold({
    title: 'TodoApp'
  })

