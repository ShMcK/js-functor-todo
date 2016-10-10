import React from 'react'
import Component from '../utils/Component'
import classToFn from '../utils/classToFn'
import store from '../store'

const Todos = store.fold(({ state, dispatch }) =>
  <div>
    <span>Filter: {state.visibilityFilter}</span>
    <ul>
      { state.todos.map((t, i) => <li key={i}>{t.title}</li>) }
    </ul>
    <button onClick={() =>
      dispatch({ type: 'new_todo', payload: {title: 'New todo'}})}>
      Add Todo
    </button>
    <button onClick={() =>
      dispatch({ type: 'set_visibility_filter' })}>
      Set Visibility
    </button>
  </div>
)

export default Component(classToFn(Todos))
