import React from 'react'
import Container from '../container/Container'
import classes from './movieError.module.scss'

const MovieError = ({ err }: any) => {
  return (
    <Container>
      <div className={classes.err}>
        <h1>{err}</h1>
      </div>
    </Container>
  )
}

export default MovieError
