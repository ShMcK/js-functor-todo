import { Reducer } from '../functors'
import R from 'ramda'

export const TODO_ADD = 'TODO_ADD'
export const TODO_EDIT = 'TODO_EDIT'
export const TODO_TOGGLE_PROP = 'TODO_TOGGLE_PROP'

const nextId = R.compose(R.add(1), R.prop('id'), R.last)

const toggleKeyById = (key, id, fn) => R.when(R.propSatisfies(x => x === id, 'id'), fn)

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

    case TODO_EDIT:
      const { title } = action.payload
      return R.merge(state, {
        todos: state.todos
          .map(toggleKeyById('title', action.payload.id, t => R.assoc('title', title, t)))
      })

    case TODO_TOGGLE_PROP:
      const {key, id} = action.payload
      return R.merge(state, { todos: state.todos.map(
          toggleKeyById(key, id, x => R.assoc(key, !x[key], x))
        )
      })

    default:
      return state
  }
})
