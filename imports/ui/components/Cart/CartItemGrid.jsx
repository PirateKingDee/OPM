import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
class CartItemPage extends Component {

  render() {
    let {cartItem, favorited, loginModal} = this.props;
    console.log('cartItem',cartItem);
    return (
      <div className="col-sm-10">
        <Link to={'/product/'+cartItem.product_id}>
          <div className="col-sm-2">
            <img height="75%" width="75%" src={cartItem.product_image}/>
          </div>
          <div className="col-sm-3">
            <h4 className="text-center">{cartItem.product_name}</h4>
          </div>
        </Link>

        <div className="col-sm-3">
          <h5 className="text-center">${cartItem.product_price}</h5>
        </div>
        <div className="col-sm-3">
          <h5 className="text-center">{cartItem.quantity}</h5>
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
export default connect(mapStateToProps)(CartItemPage);
