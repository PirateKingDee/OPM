import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http';

var l = 'https://api.yelp.com/oauth2/token?grant_type=client_credential&client_secret=q7LpzmQXUprxVhWevT8rQ1ljZymZW2SOvKBEiYBuHi9Q0vstg8xyXYQFGz0CZG7a&client_id=2S7EnqpVSYlevSsEuZGcrg';
var access_token;
let result = HTTP.post(l);
access_token = result.data.access_token;

var Yelp = require('yelp-v3');
var yelp = new Yelp({
  access_token: access_token,
});

let key ={
  _id: "yelp_key",
  access_token: access_token
}

Meteor.call('insertKey',key);

//
// yelp.search({term: 'pizza', location: 'Rosemead,CA', offset:440}, function(error, data) {
//   console.log('data',data);
//   console.warn('length', data.businesses.length);
// });
