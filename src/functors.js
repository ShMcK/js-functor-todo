import React from 'react'

export const classToFn = C => (props) => 
  <C {...props} />

export const Component = g => ({
  fold: g,
  contramap: f =>
    Component(x => g(f(x))),
  concat: other =>
    Component(x => <div>{g(x)} {other.fold(x)}</div>),
  wrap: C =>
    Component(x => <C children={g(x)} />)
})

export const Hoc = g => ({
  fold: g,
  concat: other =>
    Hoc(x => g(other.fold(x)))
})

export const Reducer = g => ({
  fold: g,
  contramap: f =>
    Reducer((state, action) => g(state, f(action))),
  map: f =>
    Reducer((state, action) => f(g(state, action))),
  concat: o =>
    Reducer((state, action) => o.fold(g(state, action), action))
})
