import React from 'react'
import { Component } from '../functors'

const styles = {
  position: 'absolute',
	width: '100%',
	fontSize: '100px',
	fontWeight: '100',
	textAlign: 'center',
	color: 'rgba(175, 47, 47, 0.15)',
}

const Header = Component(s => 
  <h1 style={styles}>{s.title}</h1>
)

export default Header
