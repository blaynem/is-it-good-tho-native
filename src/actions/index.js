import { ADDSTRAIN } from '../constants'

export function addStrain(obj) {
  return(dispatch) => {
    dispatch({
      type: ADDSTRAIN,
      payload: obj
    })
  }
}