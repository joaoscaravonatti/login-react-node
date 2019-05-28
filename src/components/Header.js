import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Icon,
    Grid,
    Tooltip,
    Typography
} from '@material-ui/core';
// import { MenuIcon, AccountCircle } from '@material-ui/core';

export default class Header extends Component {
    constructor(props) {
        super(props);
        const { email } = JSON.parse(localStorage.getItem("@user"));
        this.state = {
            email,
            exit: false,
        };
    }

    exit = () => {
        localStorage.clear();
        this.setState({ exit: true });
        return;
    };

    render() {
        return (
            <AppBar position="static">
                {this.state.exit ? <Redirect to="/" /> : <div></div>}
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>
                            <Typography variant="h5" color="inherit" >
                                <Icon fontSize="small">dashboard</Icon> Dashboard
                            </Typography>
                        </Link>
                        <Tooltip title="Exit">
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.exit}
                                color="inherit"
                            >
                                <Icon>input</Icon>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    };
}
