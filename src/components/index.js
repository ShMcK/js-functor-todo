import Header from './Header'
import Todos from './Todos'
// import Wrapper from './Wrapper'

export default
  Header.concat(Todos)
  .fold({
    title: 'TodoApp'
  })

