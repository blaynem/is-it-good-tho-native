import { ADDSTRAIN } from '../constants'

const INITIAL_STATE = {
  data: []
}

export default function strainsReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case ADDSTRAIN:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }
    default:
      return state;
  }
} 