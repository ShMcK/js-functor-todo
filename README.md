# Functor TodoApp

Todo App built with functors. Inspired by @DrBoolean's [todo app demo](https://jsfiddle.net/cnsn8yk2/9/).

The app models Redux & React-Redux architecture without using either library. 

![todoapp image](/img/todoapp.png)

### Functors

```js
// convert React class to a Function
const classToFn = C => (props) => 
  <C {...props} />

// Component functor
export const Component = g => ({
  fold: g,
  contramap: f =>
    Component(x => g(f(x))),
  concat: other =>
    Component(x => <div>{g(x)} {other.fold(x)}</div>)
})

// Higher Order Componenet functor
// Acts like "react-redux" connect
export const Hoc = g => ({
  fold: g,
  concat: other =>
    Hoc(x => g(other.fold(x)))
})

// Reducer functor models redux reducers
export const Reducer = g => ({
  fold: g,
  contramap: f =>
    Reducer((state, action) => g(state, f(action))),
  map: f =>
    Reducer((state, action) => f(g(state, action))),
  concat: o =>
    Reducer((state, action) => o.fold(g(state, action), action))
})
```

