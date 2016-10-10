import React from 'react'
import { Component } from '../../functors'

const Wrapper = styles => Component(c => 
  <div style={styles}>{c}</div>
)

export default Wrapper
