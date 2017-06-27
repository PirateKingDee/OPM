import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory} from 'react-router';
import HomeContainer from '/imports/ui/container/HomeContainer.jsx';
import ProductContainer from '/imports/ui/container/ProductContainer.jsx';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';
//import ReviewLayout from '/imports/ui/layout/ReviewLayout.jsx';
export default () => (

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
    </Route>
  </Router>
)
