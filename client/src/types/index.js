// @flow
import type { AxiosPromise } from "axios"

export type Config = {
  baseUrl: string,
}

export type GetSuggestionsResponseData = Array<string>

export type GetSuggestionsResponse = AxiosPromise<GetSuggestionsResponseData>

export type Action =
  | {
      type: "ON_GET_SUGGESTION_REQUEST",
      numbers: string,
      realWordsOnly: boolean,
    }
  | {
      type: "ON_GET_SUGGESTIONS_SUCCESS",
      suggestedWords: Array<string>,
    }
  | {
      type: "ON_GET_SUGGESTIONS_FAIL",
      error: any,
    }
  | {
      type: "ON_RESET_SUGGESTIONS",
    }

export type KeypadState = {
  loading: boolean,
  error: any,
  suggestedWords: Array<string>,
}

export type State = {|
  keypad: KeypadState,
|}
