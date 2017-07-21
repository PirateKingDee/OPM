import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.publish("one_user", function(userId) {
  let selector = {_id: userId};
  return Meteor.users.find(selector);
});
