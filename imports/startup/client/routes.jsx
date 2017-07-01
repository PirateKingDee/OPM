import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory} from 'react-router';
import HomeContainer from '/imports/ui/container/HomeContainer.jsx';
import ProductContainer from '/imports/ui/container/ProductContainer.jsx';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';
import Signup from '/imports/ui/pages/Signup.jsx';
import Login from '/imports/ui/pages/Login.jsx';
import MainContainer from '/imports/ui/container/MainContainer.jsx';
import AdminContainer from '/imports/ui/container/AdminContainer.jsx';
import InsertPage from '/imports/ui/pages/InsertPage.jsx';
//import ReviewLayout from '/imports/ui/layout/ReviewLayout.jsx';
export default () => (
  <Router history={browserHistory}>
    <Route component={MainContainer}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={AdminContainer} />
      <Route path="/insert" component={InsertPage} />
    </Route>
  </Router>
)
