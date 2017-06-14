// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../../components/NotFound';
import Login from '../Login';
import Signup from '../Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flex: '1' }}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
