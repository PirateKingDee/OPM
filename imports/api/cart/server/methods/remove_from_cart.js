import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Cart } from '/imports/api/cart/cart.js';
Meteor.methods({
  removeFromCart: function(cartId){
    let removeCart = Cart.remove({_id: cartId});

    if(removeCart) {
        return "success";
    } else {
        return "error";
    }
  },
})
