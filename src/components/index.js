import Header from './Header'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import Wrapper from './Wrapper'

const styles = {
  body: {
    background: '#f5f5f5',
    minWidth: '230px',
    maxWidth: '550px',
    margin: '0 auto',
    color: '#4d4d4d',
    font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '300',
    lineHeight: '1.4em',
  },
   main: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6',
  },
}

const Layout = (store) => 
  Wrapper(styles.body)
  .contain(
    Header
    .concat(
      Wrapper(styles.main)
        .contain(TodoInput)
        .contain(TodoList)
    )
  )
  .fold(store)

export default Layout
