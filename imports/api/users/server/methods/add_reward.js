import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.publish("current_user", function() {
  // let selector = {product_id: productID};
  return Meteor.users.find();
});


Meteor.methods({
  addReward: function(userId, reward){
    let user = Meteor.users.findOne({_id:userId});
    let addReward = false;
    typeof(user.reward) == "undefined" ?
    addReward = Meteor.users.update({_id:userId},{$set:{reward:reward}}) :
    addReward = Meteor.users.update({_id:userId},{$set:{reward:reward+ user.reward}});
    if(addReward) {
        return "success";
    } else {
        return "error";
    }
  },
})
