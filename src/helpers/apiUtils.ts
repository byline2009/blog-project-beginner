import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const mergeHeader = (headers = {}) => {
  const result = {
    ...{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...headers,
  }
  return result
}

const mergeParams = (params = {}) => ({
  ...params,
})

const createPromiseNoAuth = (
  axiosData: AxiosRequestConfig
): Promise<AxiosResponse> =>
  new Promise(resolve =>
    axios(axiosData)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.log(error)
      })
  )

export const makeRequestNoAuth = ({
  method = 'GET',
  url,
  data,
  headers = {},
  params = {},
}: AxiosRequestConfig): Promise<AxiosResponse> => {
  const options = {
    method,
    url,
    headers: mergeHeader(headers),
    params: mergeParams(params),
    data,
    // timeout: TIME_OUT
  }
  return createPromiseNoAuth(options)
}
