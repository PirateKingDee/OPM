import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// import { Products } from '/imports/api/products/products.js';
import { Cart } from '/imports/api/cart/cart.js';
import CartItemPage from '/imports/ui/pages/CartItemPage.jsx';

export default createContainer((props) => {
  const cartItemSub = Meteor.subscribe('cart_items_product');
  // const products = Products.find({}).fetch();
  const cartList = Cart.find({}).fetch();
  return {
    cartList: cartList,
    loading: !cartItemSub.ready()
  };
}, CartItemPage);
