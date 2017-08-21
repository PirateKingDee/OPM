import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import ProductHolder from '/imports/ui/components/Product/ProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import setFavoriteList from '/imports/ui/Redux/actions/setFavoriteList.js';
import { connect }  from 'react-redux';
class Home extends Component {
  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let {favoriteList, loginModal, loginUser, curPage, dispatch} = this.props;
      dispatch(setPage("home"));
      console.log('favoriteList', favoriteList);
      let favoriteSet = new Set();
      favoriteList.map(function(favorite){
        favoriteSet.add(favorite.product_id);
      });

      let products = this.props.products;
      let productList = products.map(function(product, i){
        let favorited = false;
        if(favoriteSet.has(product._id)){
          favorited = true;
        }
        return <ProductHolder key={product._id} product={product} favorited={favorited} />
      });
      return (
          <div>
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
export default connect(mapStateToProps)(Home);
