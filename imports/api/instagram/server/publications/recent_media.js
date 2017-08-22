import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Instagram } from '/imports/api/instagram/instagram.js';

Meteor.publish("recent_media", function (){
  let selector = {};
  let instagramCursor = Instagram.find(selector);
  return instagramCursor;
});
