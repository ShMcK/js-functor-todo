import React from 'react'
import { Component } from '../functors'

const styles = {
  toggleAll: {
    position: 'absolute',
	  top: '-55px',
	  left: '-12px',
	  width: '60px',
	  height: '34px',
	  textAlign: 'center',
  },
  newTodo: {
    position: 'relative',
    margin: '0',
    width: '100%',
    fontSize: '24px',
    lineHeight: '1.4em',
    boxSizing: 'border-box',
    padding: '16px 16px 16px 60px',
	  background: 'rgba(0, 0, 0, 0.003)',
    border: 'none',
	  boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
  },
}

const TodoInput = Component(() =>
  <section style={styles.main}>
    <input className='toggle-all' style={styles.toggleAll} type='checkbox' />
    <label htmlFor='toggle-all' style={{display: 'none'}}>Mark all as complete</label>
    <input style={styles.newTodo} placeholder='What needs to be done?' autoFocus />
  </section>
)

export default TodoInput
