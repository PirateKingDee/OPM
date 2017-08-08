import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import { Products } from '/imports/api/products/products.js';
import OneUserShopPage from '/imports/ui/pages/OneUserShopPage.jsx';
export default createContainer((props) =>{
  let username = props.params.username;
  let userId = Meteor.users.findOne({profile:{name:username}})._id;
  const favoriteListSub = Meteor.subscribe('favorite_list', userId);
  const favoriteList = AffiliateList.find({}).fetch();
  const products = Products.find({}).fetch();


  return {
    loading: !favoriteListSub.ready(),
    favoriteList: favoriteList,
    products: products,
    username:username
  }
}, OneUserShopPage);
