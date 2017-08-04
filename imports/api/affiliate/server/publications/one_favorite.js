import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
Meteor.publish("one_favorite", function (productId){
  let selector = {product_id: productId, user_id: this.userId};
  return AffiliateList.find(selector);
});
