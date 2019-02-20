import { from } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"

// api

import { getSuggestions } from "../api/api"

export const initialState = {
  loading: false,
  error: null,
  numbers: "",
}

export const onButtonPressed = number => ({
  type: "ON_BUTTON_PRESSED",
  number,
})

export const onGetSuggestionsRequest = numbers => ({
  type: "ON_GET_SUGGESTIONS_REQUEST",
  numbers,
})

export const onGetSuggestionsSuccess = words => ({
  type: "ON_GET_SUGGESTIONS_SUCCESS",
  words,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_BUTTON_PRESSED":
      return {
        ...state,
        numbers: `${state.numbers}${action.number}`,
      }
    case "ON_GET_SUGGESTION_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ON_GET_SUGGESTION_SUCCESS":
      return {
        ...state,
        loading: false,
        words: action.words,
      }
    default:
      return state
  }
}

const suggestionsEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "ON_GET_SUGGESTIONS_REQUEST"),
    switchMap(action =>
      from(getSuggestions(action.numbers)).pipe(
        flatMap(response => {
          return from([onGetSuggestionsSuccess(response.data)])
        }),
        catchError(e =>
          from([
            // onSuggestionsFail(e),
          ]),
        ),
      ),
    ),
  )

export const epics = [suggestionsEpic]
