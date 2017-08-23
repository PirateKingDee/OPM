import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Cart } from '/imports/api/cart/cart.js';
Meteor.methods({
  updateQuantity: function(cartId, qty){

    let updateCart = Cart.update({_id:cartId},{$set:{quantity:qty}});

    if(updateCart) {
        return "success";
    } else {
        return "error";
    }
  },
})
