import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
// import oxfordLogo from '../../img/logos/partners/ox_brand6_pos_rect.gif'
import oxfordLogo2 from '../../img/logos/partners/Long-Logo-RGB.jpg'
import bodleainLogo from '../../img/logos/partners/bodleain.png'
import pennLogo from '../../img/logos/partners/PL SIMS Logo_small.png'
import cnrsLogo from '../../img/logos/partners/logo_cnrs_irht2.jpg'
import aaltoLogo from '../../img/logos/partners/Aalto_SCI_EN_13_BLACK_2_cropped.png'
// import secoLogo from '../../img/logos/partners/13_9_04_logo_cropped_small.png'
import tapLogo from '../../img/logos/funders/cropped-logo_tap_0_.png'
import didLogo from '../../img/logos/funders/did_logo.png'
import esrcLogo from '../../img/logos/funders/UKRI_ESR_Council-Logo_Horiz-RGB_100px.png'
import imlsLogo from '../../img/logos/funders/imls_logo_2c_cropped.jpg'
import anrLogo from '../../img/logos/funders/Agence_Nationale_de_la_Recherche.png'
import akaLogo from '../../img/logos/funders/aka_en_vaaka_rgb.jpg'

const styles = theme => ({
  root: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    bottom: 0,
    left: 0,
    boxShadow: '0 -20px 20px -20px #333',
    width: '100%',
    borderRadius: 0
  },
  layout: {
    width: 'auto',
    // height: 120,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1500 + theme.spacing(6))]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 40
  },
  aaltoLogo: {
    height: 37
  },
  bodleainLogo: {
    height: 48,
    marginTop: -5
  },
  tapLogo: {
    height: 40,
    marginRight: -30
  },
  esrcLogo: {
    height: 40
  }
})

const Footer = props => {
  const { classes } = props
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.layout}>
        <Grid item xs className={classes.logoContainer}>
          <a href='http://www.oerc.ox.ac.uk' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={oxfordLogo2} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.bodleian.ox.ac.uk' target='_blank' rel='noopener noreferrer'>
            <img className={classes.bodleainLogo} src={bodleainLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://schoenberginstitute.org' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={pennLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.irht.cnrs.fr/?q=en' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={cnrsLogo} alt='logo' />
          </a>
        </Grid>
        {/* <Grid item xs className={classes.logoContainer}>
            <a href='https://seco.cs.aalto.fi/projects/mmm' target='_blank' rel='noopener noreferrer'>
              <img className={classes.logo} src={secoLogo} alt='logo' />
            </a>
          </Grid> */}
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.aalto.fi/en/department-of-computer-science' target='_blank' rel='noopener noreferrer'>
            <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
          </a>
        </Grid>
      </Grid>
      <Grid container className={classes.layout}>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.transatlanticplatform.com' target='_blank' rel='noopener noreferrer'>
            <img className={classes.tapLogo} src={tapLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://diggingintodata.org/awards/2016/project/mapping-manuscript-migrations-digging-data-history-and-provenance-pre-modern' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={didLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://esrc.ukri.org' target='_blank' rel='noopener noreferrer'>
            <img className={classes.esrcLogo} src={esrcLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.imls.gov' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={imlsLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://anr.fr/en' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={anrLogo} alt='logo' />
          </a>
        </Grid>
        <Grid item xs className={classes.logoContainer}>
          <a href='https://www.aka.fi/en' target='_blank' rel='noopener noreferrer'>
            <img className={classes.logo} src={akaLogo} alt='logo' />
          </a>
        </Grid>
      </Grid>
    </Paper>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
