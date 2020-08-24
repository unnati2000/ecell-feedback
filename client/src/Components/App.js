import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routing from '../Routing/Routes';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routing}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
