import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
Meteor.publish("list_products", function (){
  let selector = {};
  let productCursor = Products.find(selector);
  let favoriteListSelector = {user_id: this.userId};
  let options = {
    fields:{
      product_id: 1,
    }
  }
  let favoriteListCursor = AffiliateList.find(favoriteListSelector, options);
  return [productCursor, favoriteListCursor]
});
