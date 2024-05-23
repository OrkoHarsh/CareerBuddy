import {
  SIGNUP_USER,
  LOGIN_USER,
  GET_USER,
  AUTH_FAIL,
  CLEAR_ERROR,
  LOGOUT_USER,
  SET_LOADING,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
      }
    case SIGNUP_USER:
    case LOGIN_USER:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        user: action.payload.user,
      }
    case LOGOUT_USER:
    case AUTH_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload ?? null,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
