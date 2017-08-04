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
import BlogContainer from '/imports/ui/container/BlogsContainer.jsx';
import CreateBlogPage from '/imports/ui/pages/CreateBlogPage.jsx';
import OneBlogContainer from '/imports/ui/container/OneBlogContainer.jsx';
import MyBlogsContainer from '/imports/ui/container/MyBlogsContainer.jsx';
import OneBlogEditContainer from '/imports/ui/container/OneBlogEditContainer.jsx';
import OneUserProfileContainer from '/imports/ui/container/OneUserProfileContainer.jsx';
import MyFavoriteListContainer from '/imports/ui/container/MyFavoriteListContainer.jsx';
import AllUsersFavoriteListContainer from '/imports/ui/container/AllUsersFavoriteListContainer.jsx';
import OneUserListContainer from '/imports/ui/container/OneUserListContainer.jsx';
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
      <Route path="/my_favorite_list" component={MyFavoriteListContainer} />
      <Route path="/all_user_favorite_list" component={AllUsersFavoriteListContainer} />
      <Route path="/favorite_list/:username" component={OneUserListContainer} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/blog/write"  component={CreateBlogPage} />
      <Route path="/blog/myblogs"  component={MyBlogsContainer} />
      <Route path="/blog/:id"  component={OneBlogContainer} />
      <Route path="/blog/edit/:id" component={OneBlogEditContainer} />
      <Route path="/profile/user/:id" component={OneUserProfileContainer} />
    </Route>
  </Router>
)
