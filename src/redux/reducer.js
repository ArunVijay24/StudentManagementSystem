import { LOGIN, LOGOUT, TOGGLE } from "./actionTypes"
const initialState = {
  formValues: null,
  student: null,
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        formValues: [...state, action.payload],
      }
    case LOGOUT:
      return {
        ...state,
        formValues: null,
      }
    case TOGGLE:
      return {
        ...state,
        formValues: [...state],
      }
    default:
      return state
  }
}
export default Reducer

// export const userSlice = createSlice({
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload
//     },
//     logout: (state) => {
//       state.user = null
//     },
//     formVisibility: (state) => {
//       state.user.toggle = true
//     },
//   },
// })

// export const { login, logout, formVisibility } = userSlice.actions
// export const selectUsers = (state) => state.user.user
// export default userSlice.reducer
