import { Reducer } from '../functors'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const appReducer = Reducer((state, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
})

export default appReducer
