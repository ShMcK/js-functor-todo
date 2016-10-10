import React from 'react'

const classToFn = C => (props) => 
  <C {...props} />

export default classToFn
