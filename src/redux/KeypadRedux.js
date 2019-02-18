export const initialState = {
  loading: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GET_SUGGESTION_REQUEST":
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

const loginEpic = action$ => {}

export const epics = [loginEpic]
