import React, { Component } from 'react';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Routes />
      </CssBaseline>
    );
  }
}

export default App;
