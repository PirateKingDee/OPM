import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import { Reviews } from '/imports/api/review/reviews.js';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import ProductPage from '/imports/ui/pages/ProductPage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  const oneProductSub = Meteor.subscribe('one_product', id);
  const product = Products.findOne();
  //console.log('product',product);
  const reviewSub = Meteor.subscribe('match_reviews', id);
  const review = Reviews.find({},{sort: {created_at:-1}}).fetch();
  const affiliateSub = Meteor.subscribe('one_favorite', id);
  const isFavorited = AffiliateList.findOne();
  return {
    reviews: review,
    product: product,
    isFavorited: isFavorited,
    loading: !oneProductSub.ready() || !reviewSub.ready() || !affiliateSub.ready()
  };
}, ProductPage);
