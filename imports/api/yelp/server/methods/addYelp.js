import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Yelps } from '/imports/api/yelp/yelps.js';
import { ApiKeys } from '/imports/api/api_keys/api_keys.js';
import Future from 'fibers/future';

Meteor.methods({
  addYelp: function(term, location, offset){
    console.warn('in addYelp', term, location, offset);
    let selector = {term: term, location:location};
    let access_token = ApiKeys.findOne({_id:"yelp_key"}).access_token;
    var Yelp = require('yelp-v3');
    var yelp = new Yelp({
      access_token: access_token,
    });
    var yelpFuture = new Future();
    // var displayData
    Meteor.bindEnvironment(yelp.search({term: term, location: location, offset: offset}, function(error, data) {
      yelpFuture.return(data);
    }));
    try {
      yelpFuture.wait();
      total = yelpFuture.value.total;
      let data = yelpFuture.value.businesses;
      // console.warn('data', yelpFuture.value);
      data.map(function(d){
        Yelps.upsert({id:d.id}, {$set:d});
      });
    } catch (error) {
      console.warn("EasyPost estimateShipping error", error);
      throw new Meteor.Error({customMsg: "Error! Shipping rate not available."});
    }
  },
});
