import React from 'react'
import { Component, classToFn } from '../functors'
import { ADD_TODO } from './reducer'
import { SET_VISIBILITY_FILTER } from '../App/reducer'
import store from '../store'
import Todo from '../components/Todo'

const styles = {
  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },
}

const TodoList = store.fold(({ state, dispatch }) =>
  <ul style={styles.list}>
    { state.todos.map((todo, i) => <Todo key={i} title={todo.title} />) }
  </ul>
)

export default Component(classToFn(TodoList))


/*
<button onClick={() =>
      dispatch({ type: ADD_TODO, payload: {title: 'New todo'}})}>
      Add Todo
    </button>
    <button onClick={() =>
      dispatch({ type: SET_VISIBILITY_FILTER })}>
      Set Visibility
    </button>
*/