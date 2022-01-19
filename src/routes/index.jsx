import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Title from '../pages/title';
import Settings from '../pages/settings';
import Feedback from '../pages/feedback';
import Ranking from '../pages/ranking';
import NotFound from '../pages/not-found';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/title" component={ Title } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Routes;
