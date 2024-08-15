/**
 * @description Axios HTTP Handler Utility
 * @author Fasal
 */

import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  withCredentials: false,
})

http.interceptors.request.use(
  req =>
    // add request headers if required
    req,
  error => Promise.reject(error)
)

http.interceptors.response.use(
  async res => {
    const { data } = res
    if (data && data.status === 2000) {
      // clear token from cookies and store for authenticeation flow
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)
