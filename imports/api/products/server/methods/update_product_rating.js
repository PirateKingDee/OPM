import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
Meteor.methods({
  updateProductTotalRating: function(id, totalRating){
      let productUpdate = Products.update({_id:id}, {$set:{total_rating:totalRating}});
      if(productUpdate) {
          return "success";
      } else {
          return "error";
      }
  },
  updateProductRating: function(id, rating){
    let productUpdate = Products.update({_id: id}, {$set:{rating:rating}});
    if(productUpdate) {
        return "success";
    } else {
        return "error";
    }
  },
})
