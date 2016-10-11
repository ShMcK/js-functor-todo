import R from 'ramda'
import { Reducer } from '../functors'

export const FILTER_SET = 'FILTER_SET'

export default Reducer((state, action) => {
  switch (action.type) {

    case FILTER_SET:
      return R.merge(state, { filter: action.filter })

    default:
      return state
  }
})
