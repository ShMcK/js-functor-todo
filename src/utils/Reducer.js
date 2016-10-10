export default = g => ({
  fold: g,
  contramap: f =>
    Reducer((state, action) => g(state, f(action))),
  map: f =>
    Reducer((state, action) => f(g(state, action))),
  concat: o =>
    Reducer((state, action) => o.fold(g(state, action), action))
})
