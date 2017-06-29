import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Reviews } from '/imports/api/review/reviews.js';
import DisplayReview from '/imports/ui/components/DisplayReview.jsx';
export default createContainer((props) =>{
  const id = props.productID;
  // question:  how come after subscribed to the data with correct id, Reviews.find({}) still return
  // datas that are not in this id? Now I still need to pass in a selector of the id, so what is the point
  // of subscribing to a list of data?
  const reviewSub = Meteor.subscribe('match_reviews', id);
  let selector = {};
  const reviews = Reviews.find(selector, {sort: {date:-1}}).fetch();
  return {
    product: props.product,
    reviews: reviews,
    loading: !reviewSub.ready()
  };
}, DisplayReview);
