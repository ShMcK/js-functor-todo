import React from 'react'
import { Component, classToFn } from '../../functors'
import connect from '../../connect'
import { todoAdd, todoEdit, todoToggleProp, filterSet } from '../../actions'
import Todo from './Todo'
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilter'
import styles from './styles'
import R from 'ramda'

const filterTodos = filter => todo => {
  switch (filter) {
    case 'completed':
      return todo.isComplete
    case 'todo':
      return !todo.isComplete
    default:
      return true
  }
}

const Todos = connect.fold(({ state, dispatch }) => {
  const todos = state.todos.filter(filterTodos(state.filter))
  return (
    <section style={styles.main}>
      <input className='toggle-all' style={styles.toggleAll} type='checkbox' />
      <label htmlFor='toggle-all' style={{display: 'none'}}>Mark all as complete</label>

      <TodoInput
        onSubmit={val => dispatch(todoAdd(val))}
      />

      <ul style={styles.list}>
        { todos
          .map((todo) =>
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => dispatch(todoToggleProp('isComplete', todo.id))}
            toggleEdit={() => dispatch(todoToggleProp('isEditing', todo.id))}
            onEditSubmit={v => dispatch(todoEdit(todo.id, v))}
          />
        )}
      </ul>
      <TodoFilter
        filterSet={f => dispatch(filterSet(f))}
        todoCount={todos.length}
      />
    </section>
  )
})

export default Component(classToFn(Todos))
