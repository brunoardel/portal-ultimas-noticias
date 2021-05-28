import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Principal from './Principal.jsx';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/categoria/:categoria" component={Principal} />
          <Route exact path="/" component={Principal} />
          <Redirect to="/portal-ultimas-noticias/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
