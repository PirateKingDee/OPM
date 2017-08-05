import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import AdminPage from '/imports/ui/pages/AdminPage.jsx';

export default createContainer((props) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};
  const products = Products.find(selector, {sort: {name:1}}).fetch();

  return {
    products: products,
    loading: !productSub.ready()
  };
}, AdminPage);
