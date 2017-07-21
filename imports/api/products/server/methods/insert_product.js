import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
Meteor.methods({
  insertProduct: function(product){
      let productInsert = Products.insert(product);
      console.log('productInsert', product);
      if(productInsert) {
          return "success";
      } else {
          return "error";
      }
  },
})
