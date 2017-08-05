import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import ProductHolder from '/imports/ui/components/Product/ProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
class CartItemPage extends Component {
  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let {products, loginModal, loginUser, curPage, dispatch} = this.props;
      dispatch(setPage("cart"));
      let productList = products.map(function(product, i){

        return <ProductHolder key={product._id} product={product} favorited={true} />
      });
      return (
          <div className="container bodyContainer">
            <div className="container bodyContainer">
              {productList}
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
export default connect(mapStateToProps)(CartItemPage);
