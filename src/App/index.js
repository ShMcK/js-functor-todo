import TodoList from '../TodoList'
import Body from '../components/Body'
import Header from '../components/Header'

const App =
  Body
  .contain(
    Header
    .concat(TodoList)
  )
  .fold({ title: 'Todo App' })

export default App
