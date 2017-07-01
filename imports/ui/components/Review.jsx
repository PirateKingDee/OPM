import React, {Component} from 'react';
import DisplayReivew from '/imports/ui/components/DisplayReview.jsx';
import ProductContainer from '/imports/ui/container/ProductContainer.jsx';
export default class Review extends Component {

  render() {
    let product = this.props.product;
    let reviews = this.props.reviews;
    let rating = 0;
    //console.log('rating', rating);
    let addReview = () => {
      //console.log('user',Meteor.user().profile.name);
      let message = this.refs.review.value.trim();
      let newReview = {
        product_id:product._id,
        // product_name:product.name,
        username: Meteor.user().profile.name,
        verified: false,
        rating: rating,
        review: message,
        // date: new Date()
      }
      Meteor.call("addReview", newReview, function(error, result){
        if(result === 'success'){
                console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });

      let totalRating = product.total_rating+rating;
      Meteor.call("updateProductTotalRating", product._id, totalRating);


      newAvgRating = totalRating/(reviews.length+1);

      //update product.rating
      Meteor.call("updateProductRating", product._id, newAvgRating);
      clearRating();
      clearReviewText();
    }

    let clearTitleText = () => {
      this.refs.title.value = "";
    }
    let clearReviewText = () => {
      this.refs.review.value = "";
    }
    let clearRating = () => {
      this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }

    let oneRating = () => {
      rating = 1;
      this.refs.firstRatingImage.src="/images/chopper_icon.gif";
      this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }
    let twoRating = () => {
      rating = 2;
      this.refs.firstRatingImage.src="/images/chopper_icon.gif";
      this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }
    let threeRating = () => {
      rating = 3;
      this.refs.firstRatingImage.src="/images/chopper_icon.gif";
      this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
      this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }
    let fourRating = () => {
      rating = 4;
      this.refs.firstRatingImage.src="/images/chopper_icon.gif";
      this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
      this.refs.fourthRatingImage.src="/images/chopper_icon.gif";
      this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }
    let fiveRating = () => {
      rating = 5;
      this.refs.firstRatingImage.src="/images/chopper_icon.gif";
      this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
      this.refs.fourthRatingImage.src="/images/chopper_icon.gif";
      this.refs.fifthRatingImage.src="/images/chopper_icon.gif";
    }

    let onOneStar = () => {
      if(rating<1){
        this.refs.firstRatingImage.src="/images/chopper_icon.gif";
        // this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }

    let leaveOneStar = () => {
      if(rating<1)
      this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
      // this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      // this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      // this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      // this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
    }
    let onTwoStar = () => {
      if(rating==0){
        this.refs.firstRatingImage.src="/images/chopper_icon.gif";
        this.refs.secondRatingImage.src="/images/chopper_icon.gif";
      }
      else if(rating<=2){
        this.refs.secondRatingImage.src="/images/chopper_icon.gif";
        // this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }

    let leaveTwoStar = () => {
      if(rating==0){
        this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating<2){
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
      }

    }
    let onThreeStar = () => {
      if(rating<=3){
        this.refs.firstRatingImage.src="/images/chopper_icon.gif";
        this.refs.secondRatingImage.src="/images/chopper_icon.gif";
        this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
        // this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        // this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }

    let leaveThreeStar = () => {
      if(rating==0){
        this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==1){
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating == 2){
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
      }

    }
    let onFourStar = () => {
      if(rating<=4){
        this.refs.firstRatingImage.src="/images/chopper_icon.gif";
        this.refs.secondRatingImage.src="/images/chopper_icon.gif";
        this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
        this.refs.fourthRatingImage.src="/images/chopper_icon.gif";
        // this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }

    let leaveFourStar = () => {
      if(rating==0){
        this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==1){
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating == 2){
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==3){
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }
    let onFiveStar = () => {
      if(rating<5){
        this.refs.firstRatingImage.src="/images/chopper_icon.gif";
        this.refs.secondRatingImage.src="/images/chopper_icon.gif";
        this.refs.thirdRatingImage.src="/images/chopper_icon.gif";
        this.refs.fourthRatingImage.src="/images/chopper_icon.gif";
        this.refs.fifthRatingImage.src="/images/chopper_icon.gif";
      }
    }

    let leaveFiveStar = () => {
      if(rating==0){
        this.refs.firstRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==1){
        this.refs.secondRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating == 2){
        this.refs.thirdRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==3){
        this.refs.fourthRatingImage.src="/images/gray_chopper_icon.png";
        this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
      else if(rating==4){
        this.refs.fifthRatingImage.src="/images/gray_chopper_icon.png";
      }
    }

    return (
      <div className="container whole_review">
        <div className="row">

          <h2 className="text-center review_text">Reviews</h2>
          <button  onMouseLeave={leaveOneStar} onMouseEnter={onOneStar} onClick={oneRating} className="rating-btn"><img ref="firstRatingImage" height="35px" width="35px" src="/images/gray_chopper_icon.png" /></button>
          <button  onMouseLeave={leaveTwoStar} onMouseEnter={onTwoStar} onClick={twoRating} className="rating-btn"><img ref="secondRatingImage" height="35px" width="35px" src="/images/gray_chopper_icon.png" /></button>
          <button  onMouseLeave={leaveThreeStar} onMouseEnter={onThreeStar} onClick={threeRating} className="rating-btn"><img ref="thirdRatingImage" height="35px" width="35px" src="/images/gray_chopper_icon.png" /></button>
          <button  onMouseLeave={leaveFourStar} onMouseEnter={onFourStar} onClick={fourRating} className="rating-btn"><img ref="fourthRatingImage" height="35px" width="35px" src="/images/gray_chopper_icon.png" /></button>
          <button  onMouseLeave={leaveFiveStar} onMouseEnter={onFiveStar} onClick={fiveRating} className="rating-btn"><img ref="fifthRatingImage" height="35px" width="35px" src="/images/gray_chopper_icon.png" /></button>
          <div className="form-group review-form">
            <textarea onClick={clearReviewText} ref="review" className="form-control" id="reviewText" rows="4" placeholder="How is the product?" defaultValue="Write your reviews here">
            </textarea>
            <button  onClick={addReview} type="submit" className="btn btn-primary pull-right">Submit</button>
          </div>
          {/* <DisplayReivew reviews={product.reviews}/> */}
        </div>
      </div>
    )
  }
}
