import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/review/reviews.js';
Meteor.publish("match_reviews", function(productID) {
  let selector = {product_id: productID};
  return Reviews.find(selector);
});
