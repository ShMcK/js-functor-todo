import Reducer from '../utils/Reducer'

const appReducer = Reducer((state, action) => {
  switch (action.type) {
    case 'set_visibility_filter':
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
})

export default appReducer
