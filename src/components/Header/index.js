import React from 'react'
import { Component } from '../../functors'

const styles = {
  position: 'absolute',
	width: '100%',
	fontSize: '2rem',
	fontWeight: '100',
	textAlign: 'center',
	color: 'rgba(175, 47, 47, 0.15)',
}

const Header = Component(({ title }) => 
  <header style={styles}>
		<h1>{title}</h1>
	</header>
)

export default Header
