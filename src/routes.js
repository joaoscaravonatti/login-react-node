import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import isAuthenticated from './services/auth';
import { Login, Dashboard, Register } from './pages/Pages';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={Register} />
                <PrivateRoute path="/admin" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    </Fragment>
);

export default Routes;