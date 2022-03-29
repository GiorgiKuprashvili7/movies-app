import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import { moviesRequest } from '../../utils/axios-utils'
import { APIkey } from '../../utils/axios-utils'
import classes from './movieDetails.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

const fethMovieDetails = (id: any) => {
  return moviesRequest({ url: `?apikey=${APIkey}&i=${id}`, method: 'get' })
}

const MovieDetails = () => {
  const { imdbID } = useParams()
  const { data, isLoading } = useQuery(['movieDetails', imdbID], () =>
    fethMovieDetails(imdbID)
  )
  if (isLoading) {
    return (
      <div className={classes.loading}>
        <h1>loading...</h1>
      </div>
    )
  }
  return (
    <Container>
      <Link to="/" className={classes.backToHomePage}>
        <IoIosArrowBack /> back to home page
      </Link>
      <div className={classes.gridContainer}>
        <img src={data?.data.Poster} alt={data?.data.Title} />
        <div className={classes.dataContainer}>
          <div className={classes.rating}>
            IMDB: {data?.data.imdbRating}{' '}
            <AiFillStar className={classes.star} />
          </div>
          <h1 className={classes.title}>{data?.data.Title}</h1>
          <p className={classes.plot}>{data?.data.Plot}</p>
          <div className={classes.details}>
            <p>
              <span>Released:</span> {data?.data.Released}
            </p>
            <p>
              <span>Country:</span> {data?.data.Country}
            </p>
            <p>
              <span>Language:</span> {data?.data.Language}
            </p>
            <p>
              <span>Genre:</span> {data?.data.Genre}
            </p>
            <p>
              <span>Writer:</span> {data?.data.Writer}
            </p>
            <p>
              <span>Actors:</span> {data?.data.Actors}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MovieDetails
