import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/review/reviews.js';

Meteor.methods({
  addReview: function(review){
    let addReview = Reviews.insert(review);
    if(addReview) {
         return "success";
     } else {
         return "error";
     }
  },
});
