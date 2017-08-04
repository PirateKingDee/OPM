import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import ProductDetail from '/imports/ui/components/ProductDetail.jsx';
import Review from '/imports/ui/components/Review.jsx';
import ReviewContainer from '/imports/ui/container/ReviewContainer.jsx';
import DisplayReview from '/imports/ui/components/DisplayReview.jsx';
export default class ProductPage extends Component {

  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      //subscribe review to product page also
      let { product, reviews, isFavorited } = this.props;
      return (
          <div>
            <div className="container">
              <ProductDetail product={product} reviews={reviews} isFavorited={isFavorited}/>
              <DisplayReview product={product} reviews={reviews}/>
              <Review product={product} reviews={reviews}/>

              {/* <ReviewContainer productID={product.product_id} product={product}/> */}
            </div>
          </div>
      )
    }
  }
}
