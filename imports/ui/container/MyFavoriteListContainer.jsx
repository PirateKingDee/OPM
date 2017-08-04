import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import { Products } from '/imports/api/products/products.js';
import MyFavoriteList from '/imports/ui/pages/MyFavoriteList.jsx';
export default createContainer((props) =>{
  const favoriteListSub = Meteor.subscribe('favorite_list', Meteor.userId());
  const favoriteList = AffiliateList.find({}).fetch();
  const productList = Products.find({}).fetch();
  return {
    favoriteList: favoriteList,
    products: productList,
    loading: !favoriteListSub.ready()
  }
}, MyFavoriteList);
