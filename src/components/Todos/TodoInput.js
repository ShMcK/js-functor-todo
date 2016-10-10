import React from 'react'

const styles = {
  newTodo: {
    position: 'relative',
    marginTop: '140px',
    width: '100%',
    fontSize: '1rem',
    lineHeight: '1.4rem',
    boxSizing: 'border-box',
    padding: '16px',
	  background: 'rgba(0, 0, 0, 0.003)',
    border: 'none',
	  boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
  },
}

let input;

const handleSubmit = (onSubmit, e) => {
  e.preventDefault()
  if (!input.value.trim()) return
  onSubmit(input.value)
  input.value = ''
}


 const TodoInput = ({onSubmit}) => (
  <form onSubmit={handleSubmit.bind(this, onSubmit)}>
    <input
      ref={node => { input = node }}
      style={styles.newTodo}
      placeholder='What needs to be done?'
      autoFocus
    />
  </form>
)

 export default TodoInput
