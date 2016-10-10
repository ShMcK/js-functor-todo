import ReactDOM from 'react-dom'
import initialState from './state'
import Layout from './components/index'

ReactDOM.render(
  Layout(initialState),
  document.getElementById('root')
)
