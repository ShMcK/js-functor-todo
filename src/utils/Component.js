export default = g => ({
  fold: g,
  contramap: f =>
    Component(x => g(f(x))),
  concat: other =>
    Component(x => <div>{g(x)} {other.fold(x)}</div>)
})
