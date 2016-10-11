import React from 'react'
import Radium from 'radium'

const styles = {
  li: {
    position: 'relative',
    fontSize: '24px',
    borderBottom: '1px solid #ededed'
  },
  toggle: {
    textAlign: 'center',
    width: '40px',
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    border: 'none',
    appearance: 'none',
  },
  label: {
    wordBreak: 'break-all',
	  padding: '15px 60px 15px 15px',
	  marginLeft: '45px',
	  display: 'block',
	  lineHeight: '1.2',
	  transition: 'color 0.4s',
  },
  destroy: {
    // display: 'none',
    position: 'absolute',
    top: 0,
    right: '10px',
    bottom: 0,
    width: '40px',
    height: '40px',
    margin: 'auto 0 11px 0',
    fontSize: '30px',
    color: '#cc9a9a',
    transition: 'color 0.2s ease-out',
    ':hover': {
      display: 'block',
    }
  },
  show: {
    display: 'block',
  },
  edit: {
    position: 'relative',
    margin: 0,
    width: '100%',
    fontSize: '24px',
    lineHeight: '1.4em',
    padding: '6px',
    border: '1px solid #999',
    boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
  },
  hide: {
    display: 'none',
  },
  todoComplete: {
    textDecoration: 'line-through',
  },
}

let editInputs = {}

const handleSubmit = (id, onSubmit, toggleEdit, e) => {
  e.preventDefault()
  if (!editInputs[id].value.trim()) return
  onSubmit(editInputs[id].value)
  toggleEdit()
}

const Todo = ({ todo, actions }) => (
  <li style={styles.li}>

    {/* Label View */}
    <div
      style={[
        styles.view,
        todo.isEditing && styles.hide
      ]}
      onDoubleClick={actions.toggleEdit}
    >
      <input
        style={styles.toggle}
        type='checkbox'
        checked={todo.isComplete}
        onChange={actions.toggleComplete}
      >
      </input>
      <label
        key='todoLabel'
        style={[
          styles.label,
          todo.isComplete && styles.todoComplete
        ]}
      >
        {todo.title}
      </label>
      <span
        style={styles.destroy}
        onClick={actions.todoRemove}
      >×</span>
    </div>

    {/* Edit View */}
    <form
      onSubmit={handleSubmit.bind(null, todo.id, actions.onEditSubmit, actions.toggleEdit)}
      onDoubleClick={actions.toggleEdit}
    >
      <input
        ref={node => { editInputs[todo.id] = node }}
        style={[
          styles.edit,
          !todo.isEditing && styles.hide
        ]}
      />
    </form>

  </li>
)

export default Radium(Todo)
