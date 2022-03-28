import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { moviesRequest } from '../../utils/axios-utils'
import { APIkey } from '../../utils/axios-utils'

const fetchMovies = (search: string, page: number) => {
  return moviesRequest({
    url: `?apikey=${APIkey}&s=${search}&page=${page}&type=movie`,
    method: 'get',
  })
}

const Movies = () => {
  const [search, setSearch] = useState('harry')
  const [page, setPage] = useState(1)
  const [searhTerm, setSearchTerm] = useState('')

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(['movies', search, page], () => fetchMovies(search, page))

  if (isLoading) {
    return <h1>loading</h1>
  }
  if (isError) {
    return <h1>error happend</h1>
  }
  const searchHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (searhTerm) {
      setSearch(searhTerm.toLowerCase())
      setSearchTerm('')
      setPage(1)
    } else {
      return null
    }
  }
  return (
    <>
      <Header />
      <form onSubmit={searchHandler}>
        <input
          type="text"
          value={searhTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      {movies?.data.Response === 'True' ? (
        <>
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              prev
            </button>
            <div>
              <p> page:{page}</p>
              <p>number of page: {Math.ceil(movies?.data.totalResults / 10)}</p>
              totalResults:{movies?.data.totalResults}
            </div>
            <button
              disabled={page === Math.ceil(movies?.data.totalResults / 10)}
              onClick={() =>
                page < Math.ceil(movies?.data.totalResults / 10) &&
                setPage((prev) => prev + 1)
              }
            >
              next
            </button>
          </div>

          <div className="movieList">
            {movies?.data?.Search.map((movie: any) => (
              <div className="movieCard" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <Link to={`/${movie.imdbID}`}>{movie.Title}</Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>{movies?.data.Error}</h1>
      )}
    </>
  )
}

export default Movies
