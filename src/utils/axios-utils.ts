import axios from 'axios'

export const APIkey = '945153'

export const moviesRequest = ({ ...options }) => {
  const client = axios.create({
    baseURL: `https://www.omdbapi.com`,
  })

  return client(options)
    .then((res) => res)
    .catch((err) => console.log(err))
}
