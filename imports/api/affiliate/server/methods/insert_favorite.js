import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
Meteor.methods({
  insertFavorite: function(favorite){
    favorite.user_id = Meteor.userId();
    let selector = {
      _id: Meteor.userId()
    }
    let favoritedNumber = Meteor.users.findOne({_id:Meteor.userId()}).favorited_number;
    (typeof(favoritedNumber) == "undefined" || favoritedNumber == 0 ) ? Meteor.users.update(selector, {$set:{favorited_number:1}})
    : Meteor.users.update(selector, {$set:{favorited_number:favoritedNumber+1}});
    let result = AffiliateList.insert(favorite);
    if(result) {
        return "success";
    } else {
        return "error";
    }
  },
})
