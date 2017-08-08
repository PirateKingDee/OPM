import React, {Component} from 'react';
import ShopProductHolder from '/imports/ui/components/Affiliate/ShopProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
import { Link } from 'react-router';
class OneUserShopPage extends Component {

  render() {
    let {username, loginModal, loginUser, curPage, dispatch, products} = this.props;
    dispatch(setPage('allUser'));
    let productList = products.map(function(product, i){
      return <ShopProductHolder username={username} key={product._id} product={product} favorited={true} />
    })
    return (
        <div>
          <div className="container bodyContainer">
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
export default connect(mapStateToProps)(OneUserShopPage);
