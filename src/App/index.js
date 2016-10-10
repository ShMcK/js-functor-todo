import TodoList from '../TodoList'
import Body from '../components/Body'
import Main from '../components/Main'
import Header from '../components/Header'
import TodoInput from '../components/TodoInput'

const App =
  Body
  .contain(
    Header
    .concat(
      Main
        .contain(TodoInput)
        .contain(TodoList)
    )
  )
  .fold({ title: 'Todo App' })

export default App
