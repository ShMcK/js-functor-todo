import { Reducer } from '../functors'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export default Reducer((state, action) => {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })

    default:
      return state
  }
})
