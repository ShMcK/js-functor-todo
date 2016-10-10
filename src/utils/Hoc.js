export default = g => ({
  fold: g,
  concat: other =>
    Hoc(x => g(other.fold(x)))
})
