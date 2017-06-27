import React, {Component} from 'react';
import DisplayReivew from '/imports/ui/components/DisplayReview.jsx';
export default class Review extends Component {

  render() {
    let product = this.props.product;
    //console.log('hi');
    let addedReviewProduct = {

    }
    let addReview = () => {
      // console.log("review",this.refs.review.value.trim());
      let newReview = this.refs.review.value.trim();
      if(product.review == null){
        addedReviewProduct = {
          review: [newReview]
        }
      }
      else{
        var curReview = product.review;
        curReview.push(newReview);
        addedReviewProduct = {
          review: curReview
        }
      }

      Meteor.call("addReview", product._id, addedReviewProduct, function(error, result){
        if(result === 'success'){
                console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });
      // console.log('updatedProduct', product);
    }
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Reviews</h2>
          <div className="form-group">
            {/* <label htmlFor="exampleTextarea"> Review Area </label> */}
            <textarea ref="review" className="form-control" id="reviewText" rows="4" defaultValue="Please review on this item">
            </textarea>
             <button onClick={addReview} type="submit" className="btn btn-primary pull-right">Submit</button>
          </div>
          <DisplayReivew product={product} />
        </div>
      </div>
    )
  }
}
