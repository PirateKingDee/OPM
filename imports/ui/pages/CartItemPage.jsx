import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import CartItemGrid from '/imports/ui/components/Cart/CartItemGrid.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
class CartItemPage extends Component {
  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let {cartList, loginModal, loginUser, curPage, dispatch} = this.props;
      dispatch(setPage("cart"));
      let productList = cartList.map(function(cartItem, i){

        return <CartItemGrid key={cartItem._id} cartItem={cartItem} />
      });
      return (
          <div className="cartContainer">
            <div className="col-sm-10">
              <div className="col-sm-2">
              </div>
              <div className="col-sm-3">
                <h4 className="text-center">Product Name</h4>
              </div>

              <div className="col-sm-3">
                <h5 className="text-center">Price</h5>
              </div>
              <div className="col-sm-3">
                <h5 className="text-center">Quantity</h5>
              </div>
            </div>
            {productList}

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
export default connect(mapStateToProps)(CartItemPage);
