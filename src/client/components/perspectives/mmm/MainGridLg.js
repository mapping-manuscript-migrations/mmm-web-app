import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MainCard from './MainCard'

const useStyles = makeStyles(theme => ({
  lowerRow: {
    marginTop: theme.spacing(1)
  }
}))

const MainGridLg = props => {
  const { perspectives, rootUrl } = props
  const classes = useStyles()
  const upperRowItems = []
  const lowerRowItems = []
  for (let i = 0; i < 3; i++) {
    const perspective = perspectives[i]
    upperRowItems.push(
      <MainCard
        key={perspective.id}
        perspective={perspective}
        cardHeadingVariant='h4'
        rootUrl={rootUrl}
      />)
  }
  for (let i = 3; i < 5; i++) {
    const perspective = perspectives[i]
    lowerRowItems.push(
      <MainCard
        key={perspective.id}
        perspective={perspective}
        cardHeadingVariant='h4'
        rootUrl={rootUrl}
      />)
  }
  return (
    <>
      <Grid container spacing={3}>
        {upperRowItems}
      </Grid>
      <Grid className={classes.lowerRow} container justify='center' spacing={3}>
        {lowerRowItems}
      </Grid>
    </>
  )
}

MainGridLg.propTypes = {
  perspectives: PropTypes.array.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default MainGridLg
