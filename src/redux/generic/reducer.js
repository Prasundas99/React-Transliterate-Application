/**
 * @description Util Reducer to perform different reducer function to reduce code
 * @param {const} TYPE
 * @param {{
 * loading: true,
 * data: null,
 * error: null
 * }} state
 * @param {*} action
 * @returns
 */
 export const utilCourseReducer = (TYPE, state = {}, action) => {
    switch (action.type) {
      case `${TYPE}_REQUEST`:
        return {
          ...state,
          loading: true,
          data: null,
          error: null
        }
      case `${TYPE}_SUCCESS`:
        return {
          loading: false,
          data: action.payload,
          error: null
        }
      case `${TYPE}_FAILED`:
        return {
          loading: false,
          data: null,
          error: action.payload
        }
      default:
        return state
    }
  }