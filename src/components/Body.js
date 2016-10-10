import React from 'react'
import { Component } from '../functors'

const styles = {
  background: '#f5f5f5',
	minWidth: '230px',
	maxWidth: '550px',
	margin: '0 auto',
  color: '#4d4d4d',
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: '300',
  lineHeight: '1.4em',
}

const Body = Component(c => 
  <div style={styles}>{c}</div>
)

export default Body
