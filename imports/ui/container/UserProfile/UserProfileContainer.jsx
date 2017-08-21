import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import { Products } from '/imports/api/products/products.js';
import OneUserProfilePage from '/imports/ui/pages/OneUserProfilePage.jsx';
export default createContainer((props) =>{
  const username = props.params.username;
  console.log('username',username);
  const userSub = Meteor.subscribe('current_user');
  let selector = {};
  let user = Meteor.user();
  const favoritedListSub = Meteor.subscribe('favorite_list', Meteor.userId());
  const favoritedList = AffiliateList.find({}).fetch();
  const products = Products.find({}).fetch();
  // const blog = Blogs.findOne();
  return {
    products: products,
    favoritedList: favoritedList,
    user: user,
    loading: !favoritedListSub.ready()
  };
}, OneUserProfilePage);
