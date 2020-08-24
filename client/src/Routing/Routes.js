import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import SignIn from '../Components/Auth/SignIn';
import FeedBack from '../Components/Feedback/FeedBackForm';
import AllFeeds from '../Components/Feedback/AllFeeds';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/feedback" component={FeedBack}></Route>
        <PrivateRoute
          exact
          path="/allfeeds"
          component={AllFeeds}
        ></PrivateRoute>
      </Switch>
    </Fragment>
  );
};

export default Routes;
