import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ApiKeys } from '/imports/api/api_keys/api_keys.js';
Meteor.methods({
  insertKey: function(key){
    let keyInsert = ApiKeys.upsert({_id:key._id},{$set:key});
    if(keyInsert) {
        return "success";
    } else {
        return "error";
    }
  },
})
