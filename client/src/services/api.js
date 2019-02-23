// @flow
import axiosLib from "axios"
import config from "../config/appConfig"

export const axios = axiosLib.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const getSuggestions = (numbers: string, realWordsOnly: boolean) =>
  axios.get(
    `/suggestions?numbers=${numbers}&realWordsOnly=${
      realWordsOnly ? "true" : "false"
    }`,
  )
