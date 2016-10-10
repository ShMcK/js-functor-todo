import React from 'react'
import { Component, classToFn } from '../../functors'
import connect from '../../connect'
import { addTodo, setVisibilityFilter } from '../../actions'
import Todo from './Todo'
import styles from './styles'

const Todos = connect.fold(({ state, dispatch }) => {
  let input
  return (
    <section style={styles.main}>
      <input className='toggle-all' style={styles.toggleAll} type='checkbox' />
      <label htmlFor='toggle-all' style={{display: 'none'}}>Mark all as complete</label>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) return
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <input
          ref={node => { input = node }}
          style={styles.newTodo}
          placeholder='What needs to be done?'
          autoFocus
        />
      </form>
      <div>
        <ul style={styles.list}>
          { state.todos.map((todo) => <Todo key={todo.id} todo={todo} />) }
        </ul>
      </div>
    </section>
  )
})

export default Component(classToFn(Todos))
