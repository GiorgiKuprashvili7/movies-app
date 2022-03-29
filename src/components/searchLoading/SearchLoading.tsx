import React from 'react'
import classes from './searchLoading.module.scss'

const SearchLoading = () => {
  return (
    <div className={classes.loading}>
      <div>Searching...</div>
    </div>
  )
}

export default SearchLoading
