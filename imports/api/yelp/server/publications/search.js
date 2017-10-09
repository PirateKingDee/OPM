import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Yelps } from '/imports/api/yelp/yelps.js';
import { ApiKeys } from '/imports/api/api_keys/api_keys.js';
import Future from 'fibers/future';

Meteor.publish("search", function (){

return Yelps.find({});
  // console.log('displayDta', displayData);
});
