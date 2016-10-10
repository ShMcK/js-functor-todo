import React from 'react'
import { Component, classToFn } from '../functors'
import { ADD_TODO } from './reducer'
import { SET_VISIBILITY_FILTER } from '../App/reducer'
import store from '../store'

const Todos = store.fold(({ state, dispatch }) =>
  <div>
    <span>Filter: {state.visibilityFilter}</span>
    <ul>
      { state.todos.map((t, i) => <li key={i}>{t.title}</li>) }
    </ul>
    <button onClick={() =>
      dispatch({ type: ADD_TODO, payload: {title: 'New todo'}})}>
      Add Todo
    </button>
    <button onClick={() =>
      dispatch({ type: SET_VISIBILITY_FILTER })}>
      Set Visibility
    </button>
  </div>
)

export default Component(classToFn(Todos))
