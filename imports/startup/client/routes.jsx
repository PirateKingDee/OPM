import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory} from 'react-router';
import HomeContainer from '/imports/ui/container/Home/HomeContainer.jsx';
import ProductContainer from '/imports/ui/container/Product/ProductContainer.jsx';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';
import Signup from '/imports/ui/pages/Signup.jsx';
import Login from '/imports/ui/pages/Login.jsx';
import MainContainer from '/imports/ui/container/Main/MainContainer.jsx';
import AdminContainer from '/imports/ui/container/Admin/AdminContainer.jsx';
import InsertPage from '/imports/ui/pages/InsertPage.jsx';
import BlogContainer from '/imports/ui/container/Blogs/BlogsContainer.jsx';
import CreateBlogPage from '/imports/ui/pages/CreateBlogPage.jsx';
import OneBlogContainer from '/imports/ui/container/Blogs/OneBlogContainer.jsx';
import MyBlogsContainer from '/imports/ui/container/Blogs/MyBlogsContainer.jsx';
import OneBlogEditContainer from '/imports/ui/container/Blogs/OneBlogEditContainer.jsx';
import OneUserProfileContainer from '/imports/ui/container/OneUserProfileContainer.jsx';
import MyShopContainer from '/imports/ui/container/Affiliate/MyShopContainer.jsx';
import AllUsersShopContainer from '/imports/ui/container/Affiliate/AllUsersShopContainer.jsx';
import OneUserShopContainer from '/imports/ui/container/Affiliate/OneUserShopContainer.jsx';
import OneUserShopProductContainer from '/imports/ui/container/Affiliate/OneUserShopProductContainer.jsx';
import CartItemsContainer from '/imports/ui/container/Cart/CartItemsContainer.jsx';
import UserProfileContainer from '/imports/ui/container/UserProfile/UserProfileContainer.jsx';
import InstagramContainer from '/imports/ui/container/Instagram/instagramContainer.jsx';
import InstagramByTagContainer from '/imports/ui/container/Instagram/InstagramByTagContainer.jsx';
import YelpPage from '/imports/ui/pages/Yelp/YelpPage.jsx'
import YelpSearchContainer from '/imports/ui/container/Yelp/YelpSearchContainer.jsx';
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
      <Route path="/my_shop" component={MyShopContainer} />
      <Route path="/shop" component={AllUsersShopContainer} />
      <Route path="/shop/:username" component={OneUserShopContainer} />
      <Route path="/shop/:username/:product_id" component={OneUserShopProductContainer} />
      <Route path="/blog" component={BlogContainer} />
      <Route path="/blog/write"  component={CreateBlogPage} />
      <Route path="/blog/myblogs"  component={MyBlogsContainer} />
      <Route path="/cart_items"  component={CartItemsContainer} />
      <Route path="/instagram" component={InstagramContainer} />
      <Route path="/yelp" component={YelpSearchContainer} />
      {/* <Route path="/yelp/:term-:location" component={YelpSearchContainer} /> */}
      <Route path="/instagram/:tag" component={InstagramByTagContainer} />
      <Route path="/profile/:username" component={UserProfileContainer} />
      <Route path="/blog/:id"  component={OneBlogContainer} />
      <Route path="/blog/edit/:id" component={OneBlogEditContainer} />
      <Route path="/profile/user/:id" component={OneUserProfileContainer} />
    </Route>
  </Router>
)
