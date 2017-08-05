import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';
import { Cart } from '/imports/api/cart/cart.js';

export default createContainer((props) => {
  const userSub = Meteor.subscribe('current_user');
  let selector = {};
  let user = Meteor.user();
  const cartItemSub = Meteor.subscribe('cart_items');
  const cartItems = Cart.find({}).fetch();
  return {
    loading: !userSub.ready(),
    currentUser: user,
    isLogin: !!Meteor.userId(),
    cartItems: cartItems
  };
}, MainLayout);
