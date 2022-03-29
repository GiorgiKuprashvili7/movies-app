import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Heaeder from '../../components/header/Heaeder'
import Footer from '../../components/footer/Footer'
import { moviesRequest } from '../../utils/axios-utils'
import { APIkey } from '../../utils/axios-utils'
import MovieList from '../../components/movieList/MovieList'
import MovieError from '../../components/movieError/MovieError'
import SearchLoading from '../../components/searchLoading/SearchLoading'

const fetchMovies = (search: string, page: number) => {
  return moviesRequest({
    url: `?apikey=${APIkey}&s=${search}&page=${page}&type=movie`,
    method: 'get',
  })
}

const Movies = () => {
  const [search, setSearch] = useState('harry')
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(['movies', search, page], () => fetchMovies(search, page))

  const searchHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (searchTerm) {
      setSearch(searchTerm.toLowerCase())
      setSearchTerm('')
      setPage(1)
    } else {
      return null
    }
  }

  if (isError) {
    return <h1>error happend</h1>
  }

  return (
    <>
      <Heaeder
        searchHandler={searchHandler}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {isLoading ? (
        <SearchLoading />
      ) : movies?.data.Response === 'True' ? (
        <>
          <MovieList movies={movies} />
          <Footer page={page} setPage={setPage} movies={movies} />
        </>
      ) : (
        <MovieError err={movies?.data.Error} />
      )}
    </>
  )
}

export default Movies
