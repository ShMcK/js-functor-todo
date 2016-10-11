const initialState = {
  title: 'Todo App',
  todos: [
    {
      id: 0,
      title: 'first',
      isComplete: true,
    }, {
      id: 1,
      title: 'second',
      isComplete: false,
    }, {
      id: 2,
      title: 'third',
      isComplete: false,
    },
  ],
  filter: 'all',
}

export default initialState
