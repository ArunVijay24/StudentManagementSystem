import { LOGIN, LOGOUT, TOGGLE } from "./actionTypes"

export const login = (payload) => ({
  type: LOGIN,
  payload: payload,
})
export const logout = () => ({
  type: LOGOUT,
  payload: null,
})
export const toggle = (payload) => ({
  type: TOGGLE,
  payload: payload,
})
