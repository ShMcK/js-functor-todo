import React from 'react'
import { Component } from '../functors'

const styles = {
  main: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6',
  },
}

const Main = Component(c =>
  <div style={styles.main}>{c}</div>
)

export default Main
