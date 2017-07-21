import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';
Meteor.publish("my_blogs", function (userId){
  console.log('userId', userId);
  let selector = {user_id: userId};
  return Blogs.find(selector);
});
