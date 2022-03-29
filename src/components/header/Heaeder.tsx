import React from 'react'
import Container from '../container/Container'
import classes from './header.module.scss'
import { FiSearch } from 'react-icons/fi'
import { MdLocalMovies } from 'react-icons/md'
const Heaeder = ({ searchHandler, searchTerm, setSearchTerm }: any) => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          <div className={classes.logo}>
            <MdLocalMovies className={classes.icon} />
            <span>omdb.ge</span>
          </div>

          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
      </Container>
    </header>
  )
}

export default Heaeder
