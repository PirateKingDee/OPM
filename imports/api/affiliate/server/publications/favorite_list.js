import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import {Products} from '/imports/api/products/products.js';
import { _ } from 'meteor/underscore';
Meteor.publish("favorite_list", function(userId) {
  let selector = {
    user_id: userId
  };
  let favoriteListCursor = AffiliateList.find(selector);
  let favoriteList = favoriteListCursor.fetch();
  let productIds = _.pluck(favoriteList, 'product_id');
  let productsCursor = Products.find({_id: {$in: productIds}});
  let products = productsCursor.fetch();
  return [favoriteListCursor, productsCursor];
});
