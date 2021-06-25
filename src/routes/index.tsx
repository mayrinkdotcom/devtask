import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { ResetPassword } from '../pages/ResetPassword';

import Home from '../pages/Home';
import { JobVacancies } from '../pages/JobVacancies';
import { Portfolio } from '../pages/Portfolio';

import { DevProfile } from '../pages/DevProfile';
import { BusinessProfile } from '../pages/BusinessProfile';

import ScrollOnTop from '../lib/ScrollOnTop';

const Routes: React.FC = () => (
  <BrowserRouter>
    <ScrollOnTop />

    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/" component={Home} exact isPublic />
      <Route path="/jobs" component={JobVacancies} isPublic />
      <Route path="/portfolio" component={Portfolio} isPublic />

      <Route path="/dev/profile/:id" component={DevProfile} isPublic />
      <Route
        path="/business/profile/:id"
        component={BusinessProfile}
        isPublic
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
