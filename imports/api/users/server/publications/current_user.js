import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.publish("current_user", function() {
  // let selector = {product_id: productID};
  return Meteor.users.find();
});
