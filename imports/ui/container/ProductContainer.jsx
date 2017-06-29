import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import ProductPage from '/imports/ui/pages/ProductPage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  const oneProductSub = Meteor.subscribe('one_product', id);
  const product = Products.findOne();
  return {
    product: product,
    loading: !oneProductSub.ready()
  };
}, ProductPage);
