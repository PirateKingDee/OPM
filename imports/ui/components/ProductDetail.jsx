import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import accounting from 'accounting';
import Rating from '/imports/ui/components/Rating.jsx';
import FavoriteButton from '/imports/ui/components/Affiliate/FavoriteButton.jsx';
class ProductDetail extends Component {

  render() {
    let {product, reviews, isFavorited, loginUser, loginModal} = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
              <img height="300px" width="300px" className="img-thumbnail" src={product.image}/>
          </div>
          <div className="col-sm-8">
            <p className="detail">
              <strong>Rating: </strong>
              <Rating rating={product.rating} />
              <span> {reviews.length} reviews</span>
            </p>
            <p className="detail">
              <strong>Name: </strong>
              {product.name}
            </p>
            <p className="detail">
              <strong>Description: </strong>
              {product.description}
            </p>
            <p className="detail">
              <strong>Price: </strong>
              {accounting.formatMoney(product.price)}
            </p>
            <p className="detail">
              <strong>Ship: </strong>
              {accounting.formatMoney(product.shipping)}
            </p>
            <AddToCartButton />
            <FavoriteButton product_id={product._id} isLogin={loginModal} isFavorited={isFavorited}/>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    loginUser: state.loginUser,
    curPage: state.curPage
  };
}
export default connect(mapStateToProps)(ProductDetail);
