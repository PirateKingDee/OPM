import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
Meteor.methods({
  removeFavorite: function(productId){
    let favoritedNumber = Meteor.users.findOne({_id:Meteor.userId()}).favorited_number;
    Meteor.users.update({_id: this.userId}, {$set:{favorited_number:favoritedNumber-1 }})
    let result = AffiliateList.remove({user_id:this.userId, product_id: productId});
    if(result) {
        return "success";
    } else {
        return "error";
    }
  },
})
