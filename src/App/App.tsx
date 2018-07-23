import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';

import { PrivateRoute } from '../components/PrivateRoute';
import { LoginPage } from '../components/Login';
import { RegistrationPage } from '../components/Registration';
import { history } from '../helpers';
import { Background } from '../components/Background/Background';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
          </div>
        </Router>

        <Background />
      </React.Fragment>
    );
  }
}

// export default App;
