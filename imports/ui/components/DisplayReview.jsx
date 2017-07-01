import React, {Component} from 'react';
import Rating from '/imports/ui/components/Rating.jsx';
export default class DisplayReivew extends Component {

  render() {
    if(this.props.loading){
      return <div>loading</div>
    }
    else{
      let reviews = this.props.reviews;
      let product = this.props.product;
      // let newAvgRating = 0;
      // if(reviews.length!=0){
      //   newAvgRating = product.total_rating/reviews.length;
      // }
      //update product.rating
      //Meteor.call("updateProductRating", product._id, newAvgRating);
      let getDate = (date) => {
        return date.getMonth()+1+"/"+date.getDate()+", "+date.getFullYear();
      }
      let reviewList = reviews.map(function(review){
        return(
          <div key={review._id} className="display-review">
                  <div className="row">
                    <Rating rating={review.rating} />
                    {review.verified? <span>Verified</span> : <span>Not verified</span>}
                  </div>
                  <div className="row">
                    <span >By: </span><span className="username" >{review.username}</span>
                    <span>On </span><span>{getDate(review.created_at)}</span>
                  </div>
                  <div key={review._id} className="row">
                      <span  key={review._id}>{review.review} </span>
                  </div>
                </div>
        )
      });
      return(
        <div>
          {reviewList}
        </div>
      )
    }
  }
}
