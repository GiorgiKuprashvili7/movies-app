import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { moviesRequest } from '../../utils/axios-utils'
import { APIkey } from '../../utils/axios-utils'

const fethMovieDetails = (id: any) => {
  return moviesRequest({ url: `?apikey=${APIkey}&i=${id}`, method: 'get' })
}

const MovieDetails = () => {
  const { imdbID } = useParams()
  const { data } = useQuery(['movieDetails', imdbID], () =>
    fethMovieDetails(imdbID)
  )
  return (
    <div>
      <h1>{data?.data.Title}</h1>
    </div>
  )
}

export default MovieDetails
