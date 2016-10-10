const Hoc = g => ({
  fold: g,
  concat: other =>
    Hoc(x => g(other.fold(x)))
})

export default Hoc
