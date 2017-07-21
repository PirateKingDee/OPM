import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
Meteor.methods({
  removeProduct: function(productId){
      let productRemove = Products.remove(productId);
      console.log('productId', productId);
      if(productRemove) {
          return "success";
      } else {
          return "error";
      }
  },
})
