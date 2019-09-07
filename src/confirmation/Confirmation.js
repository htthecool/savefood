import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Typography from '@material-ui/core/Typography'
import Container from 'react-storefront/Container'
import { withStyles } from '@material-ui/core'

@withStyles(theme => ({
  siteName: {
    color: theme.palette.secondary.main
  }
}))
@inject('app') // inject the state tree into the component's props
@observer // automatically re-render when the state-tree changes
export default class Confirmation extends Component {
  render() {
    const { app, classes } = this.props // app is an instance of AppModel, the root of the state tree.

    return (
      <Container>
        {/* Container provides proper margins to make things look nice */}
        <Typography variant="h6">Confirmation</Typography>{' '}
        {/* Material UI's Typography component uses font the theme to keep fonts consistent across the app */}
        <Typography variant="body1">Please go and pick your stuff</Typography>
        <h1>Hello</h1>
      </Container>
    )
  }
}
