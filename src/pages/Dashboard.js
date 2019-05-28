import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import Header from "../components/Header";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Grid container justify="center" style={{ padding: 30 }}>
          <Paper />
        </Grid>
      </Fragment>
    );
  }
}
