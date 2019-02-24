// @flow
import { from } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"

// api
import { getSuggestions } from "../services/api"

// types
import type { Action, KeypadState } from "../types"

export const initialState: KeypadState = {
  loading: false,
  error: null,
  suggestedWords: [],
}

export const onGetSuggestionsRequest = (
  numbers: string,
  realWordsOnly: boolean,
) => ({
  type: "ON_GET_SUGGESTIONS_REQUEST",
  numbers,
  realWordsOnly,
})

export const onGetSuggestionsSuccess = (suggestedWords: Array<string>) => ({
  type: "ON_GET_SUGGESTIONS_SUCCESS",
  suggestedWords,
})

export const onGetSuggestionsFail = (error: any) => ({
  type: "ON_GET_SUGGESTIONS_FAIL",
  error,
})

export const onResetSuggestions = () => ({
  type: "ON_RESET_SUGGESTIONS",
})

export const reducer = (state: KeypadState = initialState, action: Action) => {
  switch (action.type) {
    case "ON_GET_SUGGESTION_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ON_GET_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        suggestedWords: action.suggestedWords,
      }
    case "ON_GET_SUGGESTIONS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case "ON_RESET_SUGGESTIONS":
      return {
        ...state,
        suggestedWords: [],
      }
    default:
      return state
  }
}

const suggestionsEpic = (action$: any) =>
  action$.pipe(
    filter(action => action.type === "ON_GET_SUGGESTIONS_REQUEST"),
    switchMap(action =>
      from(getSuggestions(action.numbers, action.realWordsOnly)).pipe(
        flatMap(response => {
          return from([onGetSuggestionsSuccess(response.data)])
        }),
        catchError(e => from([onGetSuggestionsFail(e)])),
      ),
    ),
  )

export const epics = [suggestionsEpic]
