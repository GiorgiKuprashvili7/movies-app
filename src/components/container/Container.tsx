import React from 'react'
import classes from './container.module.scss'

type containerProps = {
  children: React.ReactNode | string
}

const Container = ({ children }: containerProps) => {
  return <div className={classes.container}>{children}</div>
}

export default Container
