import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Products } from '/imports/api/products/products.js';
import OneUserShopProductPage from '/imports/ui/pages/OneUserShopProductPage.jsx';
import { Reviews } from '/imports/api/review/reviews.js';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
export default createContainer((props) =>{

  let userName = props.params.username;
  let productId = props.params.product_id;
  let shopOwnerId = Meteor.users.findOne({profile:{name: userName}})._id;
  let productSub = Meteor.subscribe('one_product', productId);
  let product = Products.findOne({_id: productId});
  const reviewSub = Meteor.subscribe('match_reviews', productId);
  const reviews = Reviews.find({},{sort: {created_at:-1}}).fetch();
  const affiliateSub = Meteor.subscribe('one_favorite', productId);
  const isFavorited = AffiliateList.findOne();

  return {
    product: product,
    shopOwnerId: shopOwnerId,
    reviews:reviews,
    isFavorited: isFavorited,
    loading: !productSub.ready() || !reviewSub.ready() || !affiliateSub.ready()
  }
}, OneUserShopProductPage);
