import React from 'react'
import Container from '../container/Container'
import classes from './footer.module.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const Footer = ({ page, setPage, movies }: any) => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.content}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            <IoIosArrowBack />
          </button>

          <span>
            {page} / {Math.ceil(movies?.data.totalResults / 10)}
          </span>

          <button
            disabled={page === Math.ceil(movies?.data.totalResults / 10)}
            onClick={() =>
              page < Math.ceil(movies?.data.totalResults / 10) &&
              setPage(page + 1)
            }
          >
            <IoIosArrowForward />
          </button>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
