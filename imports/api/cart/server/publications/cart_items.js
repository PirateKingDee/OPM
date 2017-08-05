import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Cart } from '/imports/api/cart/cart.js';
Meteor.publish("cart_items", function (){
  let selector = {user_id: this.userId};
  return Cart.find(selector);
});
