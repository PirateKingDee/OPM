import React, {Component} from 'react';

export default class DisplayReivew extends Component {

  render() {
    let product = this.props.product;
    let allReviews = null;
    if(product.review!=null){
      allReviews = product.review.map(function(review, i){

        return <div key={i} className="row">
          <span key={i}>{review} </span>
        </div>;

      });
    }

    return (
      <div>
        {allReviews}
      </div>
    )
  }
}
