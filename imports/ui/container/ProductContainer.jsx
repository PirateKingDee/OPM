import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import ProductPage from '/imports/ui/pages/ProductPage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  // console.log('id', id);
  const oneProductSub = Meteor.subscribe('one_product', id);
  let selector = {_id: id};
  const product = Products.findOne(selector);
  // console.log('product', product);

  return {
    product: product,
    loading: !oneProductSub.ready()
  };
}, ProductPage);
