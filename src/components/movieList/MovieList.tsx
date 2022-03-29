import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import classes from './movieList.module.scss'

const MovieList = ({ movies }: any) => {
  return (
    <Container>
      <div className={classes.movieList}>
        {movies?.data?.Search.map((movie: any) => (
          <Link
            to={`/${movie.imdbID}`}
            className={classes.card}
            key={movie.imdbID}
          >
            {movie.Poster ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <div>poster not found</div>
            )}
            <h2>
              {movie.Title.length > 40
                ? `${movie.Title.slice(0, 40)}...`
                : movie.Title}
            </h2>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default MovieList
