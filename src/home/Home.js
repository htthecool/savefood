import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Container from 'react-storefront/Container'
import Typography from '@material-ui/core/Typography'
import Row from 'react-storefront/Row'
import CmsSlot from 'react-storefront/CmsSlot'
import Grid from '@material-ui/core/Grid'
@inject('app')
@observer
export default class Home extends Component {
  render() {
    const { app } = this.props
    return (
      <Container>
        <Row>
          <Typography variant="h4">Team 16 saving fcking food waste</Typography>
        </Row>
        <Row>Harshit</Row>
        <Row>Stephan</Row>
        <Row>Richard</Row>
        <Row>Matthius</Row>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <p>One</p>
          </Grid>
          <Grid item xs={6}>
            <p>Two</p>
          </Grid>
          <Grid item xs={6}>
            <p>Two</p>
          </Grid>
        </Grid>
      </Container>
      
    )
  }
}
