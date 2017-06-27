import React, {Component} from 'react';
import Rating from '/imports/ui/components/Rating.jsx';
export default class DisplayReivew extends Component {

  render() {
    let reviews = this.props.reviews;
    let allReviews = null;
    //console.log('DisplayReivew', product);
    if(reviews!=null){
      allReviews = reviews.map(function(review, i){

        return <div key={i}>
                <div className="row">
                  <Rating rating={review.rating} name={review.name} date={review.date}/>
                  {review.verified? <span>Verified</span> : <span>Not verified</span>}
                </div>
                <div key={i} className="row">
                    <span  key={i}>{review.review} </span>
                </div>
              </div>;

      });
    }
    return (
      <div>
        <ul>
          {allReviews}
        </ul>
      </div>
    )
  }
}
