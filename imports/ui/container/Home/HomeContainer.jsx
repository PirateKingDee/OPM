import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';

import Home from '/imports/ui/pages/Home.jsx';

export default createContainer((props) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};
  const products = Products.find(selector, {sort: {name:1}}).fetch();
  const favoriteList = AffiliateList.find({}).fetch();

  return {
    favoriteList: favoriteList,
    products: products,
    loading: !productSub.ready()
  };
}, Home);
