import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Orders } from '/imports/api/orders/orders.js';
Meteor.methods({
  addPendingOrder: function(order){
    order.user_id = this.userId;
    let addOrder = Orders.insert(order);
    if(addOrder) {
        return "success";
    } else {
        return "error";
    }
  },
})
