import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  FormControl,
  Button,
  Icon
} from "@material-ui/core";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      show: false,
      message: ""
    };

    this.style = {
      container: { padding: 20, marginTop: 100 },
      paper: {
        paddingTop: 50,
        paddingRight: 50,
        paddingLeft: 50,
        paddingBottom: 20
      },
      button: { marginTop: 15, padding: 15 }
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ show: false });
    this.login();
  };

  login = async () => {
    try {
      const { email, password } = this.state;
      const res = await api.post("/user/login", {
        email,
        password
      });
      const { id, token } = res.data;
      localStorage.setItem("@user", JSON.stringify({ id, token, email }));
      this.props.history.push("/admin");
    } catch ({
      response: {
        data: { message }
      }
    }) {
      this.setState({ message, show: true });
    }
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Grid
            container
            style={this.style.container}
            justify="center"
            alignItems="center"
            direction="row"
          >
            <Grid item sm={5} md={5} xl={3} lg={4}>
              <Paper style={this.style.paper}>
                <Typography align="center" variant="h2" gutterBottom>
                  Login
                </Typography>
                <FormControl margin="normal" fullWidth>
                  <TextField
                    label="E-mail"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={this.style.button}
                  fullWidth
                >
                  Log-in &nbsp;
                  <Icon>send</Icon>
                </Button>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Typography
                    align="right"
                    variant="h6"
                    color="inherit"
                    gutterBottom
                  >
                    <br />
                    Register
                  </Typography>
                </Link>
                {this.state.show ? (
                  <Typography
                    align="center"
                    variant="h6"
                    color="error"
                    gutterBottom
                  >
                    <br />
                    {this.state.message}
                  </Typography>
                ) : (
                  <div />
                )}
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    );
  }
}
