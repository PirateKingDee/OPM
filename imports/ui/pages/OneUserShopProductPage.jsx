import React, {Component} from 'react';
import ShopProductHolder from '/imports/ui/components/Affiliate/ShopProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
import { Link } from 'react-router';
import DisplayReview from '/imports/ui/components/Product/DisplayReview.jsx';
import Review from '/imports/ui/components/Product/Review.jsx';
import ProductDetail from '/imports/ui/components/Product/ProductDetail.jsx';
class OneUserShopPage extends Component {

  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let {loginModal, loginUser, curPage, dispatch, product, shopOwnerId, reviews, isFavorited} = this.props;
      dispatch(setPage('allUser'));
      // console.log('p', product);
      return (
        <div>
          <div className="container bodyContainer">
            <ProductDetail product={product} reviews={reviews} isFavorited={isFavorited} shopOwnerId={shopOwnerId} />
            <DisplayReview product={product} reviews={reviews}/>
            <Review product={product} reviews={reviews}/>

            {/* <ReviewContainer productID={product.product_id} product={product}/> */}
          </div>
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    loginUser: state.loginUser,
    curPage: state.curPage
  };
}
export default connect(mapStateToProps)(OneUserShopPage);
