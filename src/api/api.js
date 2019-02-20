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

export const getSuggestions = (numbers: string) =>
  axios.get(`/suggestions?numbers=${numbers}`)
