import React from 'react'
import R from 'ramda'

const styles = {
  footer: {
    color: '#777',
	  padding: '10px 15px',
	  height: '20px',
	  textAlign: 'center',
	  borderTop: '1px solid #e6e6e6',
  },
  todoCount: {
	  float: 'left',
	  textAlign: 'left',
  },
  filters: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    position: 'absolute',
    right: '0',
    left: '0',
  },
  filterLi: {
    display: 'inline',
  },
  filterLink: {
    margin: '3px',
    padding: '3px 7px',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: '3px',
  },
}

const capitalize = str => R.compose(R.toUpper, R.head)(str) + R.tail(str)

const filters = ['all', 'completed', 'todo']

const TodoFilter = ({ todoCount, filterSet }) => (
  <footer style={styles.footer}>
    <span style={styles.todoCount}>
      <strong>{todoCount}</strong>
    </span>
    <ul style={styles.filter}>
      {filters.map((filter, i) => (
        <li key={i} style={styles.filterLi}>
        <a
          style={styles.filterLink}
          href='#/'
          onClick={() => filterSet(filter)}
        >
          {capitalize(filter)}
        </a>
      </li>
      ))}
    </ul>
  </footer>
)

export default TodoFilter
