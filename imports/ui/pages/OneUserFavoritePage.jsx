import React, {Component} from 'react';
import ProductHolder from '/imports/ui/components/ProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
import { Link } from 'react-router';
class OneUserFavoritePage extends Component {

  render() {
    let {allUser, loginModal, loginUser, curPage, dispatch, products} = this.props;
    dispatch(setPage('allUser'));
    let productList = products.map(function(product, i){
      return <ProductHolder key={product._id} product={product} favorited={true} />
    })
    return (
        <div>
          <div className="container">
            {productList}
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
export default connect(mapStateToProps)(OneUserFavoritePage);
