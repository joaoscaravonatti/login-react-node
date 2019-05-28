import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  FormControl,
  Button,
  Icon
} from "@material-ui/core";
import api from "../services/api";
import ErrorMessage from "../components/ErrorMessage";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };

    this.style = {
      container: { marginTop: 50 },
      paper: {
        paddingTop: 50,
        paddingRight: 50,
        paddingLeft: 50,
        paddingBottom: 40
      },
      button: { marginTop: 15, padding: 15 }
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords don't match!" });
      return;
    }
    await api.post("/user/create", this.state);

    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid
          container
          style={this.style.container}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item sm={10} md={8} xl={5} lg={5}>
            <Paper style={this.style.paper}>
              <Typography align="center" variant="h2" gutterBottom>
                Register
              </Typography>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                  type="email"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                  type="password"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Confirm password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                  type="password"
                />
              </FormControl>
              {this.state.error ? (
                <ErrorMessage message={this.state.error} />
              ) : (
                <div />
              )}
              <Grid container direction="row" justify="space-between">
                <Grid item md={5}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={this.style.button}
                      fullWidth
                    >
                      Back &nbsp;
                      <Icon>keyboard_return</Icon>
                    </Button>
                  </Link>
                </Grid>
                <Grid item md={5}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={this.style.button}
                    fullWidth
                  >
                    Register &nbsp;
                    <Icon>send</Icon>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    );
  }
}
