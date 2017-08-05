import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Cart } from '/imports/api/cart/cart.js';
Meteor.methods({
  addToCart: function(product){
    product.user_id = this.userId;
    let hasProduct = Cart.findOne({user_id: this.userId, product_id: product.product_id});
    console.log('hasProduct', hasProduct);
    let newQty;
    let cartInsert;
    if(hasProduct){
      newQty = product.quantity + hasProduct.quantity;
      console.log('newQty',newQty);
      cartInsert = Cart.update({user_id: product.user_id, product_id: product.product_id}, {$set:{quantity:newQty}});
    }
    else{
      cartInsert = Cart.insert(product);
    }

    if(cartInsert) {
        return "success";
    } else {
        return "error";
    }
  },
})
