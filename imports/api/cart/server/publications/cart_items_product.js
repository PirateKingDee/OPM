import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Cart } from '/imports/api/cart/cart.js';
import { Products } from '/imports/api/products/products.js';
import { _ } from 'meteor/underscore';
Meteor.publish("cart_items_product", function (){
  let selector = {user_id: this.userId};
  let cartCursor = Cart.find(selector);
  // let cartList = cartCursor.fetch();
  // let productIds = _.pluck(cartList, 'product_id');
  // console.log('productid', productIds);
  // let productCursor = Products.find({_id: {$in: productIds}});
  return cartCursor;
});
