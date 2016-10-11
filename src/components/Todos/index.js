import React from 'react'
import { Component, classToFn } from '../../functors'
import connect from '../../connect'
import { todoAdd, todoEdit, todoToggleProp, filterSet } from '../../actions'
import Todo from './Todo'
import TodoInput from './TodoInput'
import styles from './styles'

const Todos = connect.fold(({ state, dispatch }) => (
  <section style={styles.main}>
    <input className='toggle-all' style={styles.toggleAll} type='checkbox' />
    <label htmlFor='toggle-all' style={{display: 'none'}}>Mark all as complete</label>

    <TodoInput
      onSubmit={val => dispatch(todoAdd(val))}
    />

    <ul style={styles.list}>
      { state.todos.map((todo) =>
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={() => dispatch(todoToggleProp('isComplete', todo.id))}
          toggleEdit={() => dispatch(todoToggleProp('isEditing', todo.id))}
          onEditSubmit={v => dispatch(todoEdit(todo.id, v))}
        />
      )}
    </ul>

  </section>
))

export default Component(classToFn(Todos))
