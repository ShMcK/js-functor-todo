import { Reducer } from '../functors'
import R from 'ramda'

export const TODO_ADD = 'TODO_ADD'
export const TODO_TOGGLE_PROP = 'TODO_TOGGLE_PROP'

const nextId = R.compose(R.add(1), R.prop('id'), R.last)

const toggleKeyById = (key, id) => R.when(
  R.propSatisfies(x => x === id, 'id'),
  x => R.assoc(key, !x[key], x)
)

export default Reducer((state, action) => {
  switch (action.type) {

    case TODO_ADD:
      const nextTodo = {
        id: nextId(state.todos),
        title: action.payload.title,
        isComplete: false,
        isEditing: false
      }
      return R.merge(state, { todos: state.todos.concat(nextTodo) })

    case TODO_TOGGLE_PROP:
      const {key, id} = action.payload
      return R.merge(state, { todos: state.todos.map(toggleKeyById(key, id)) })

    default:
      return state
  }
})
