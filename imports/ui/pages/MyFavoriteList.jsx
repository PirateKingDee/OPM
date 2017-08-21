import React, {Component} from 'react';
import ProductHolder from '/imports/ui/components/Product/ProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
class MyFavoriteList extends Component {

  render() {
    if(this.props.loading){
      return(
        <div>Loading</div>
      )
    }
    else{
      let {loginModal, loginUser, curPage, dispatch, favoriteList, products} = this.props;
      dispatch(setPage("favorite"));
      let productList = products.map(function(product, i){
        return <ProductHolder key={product._id} product={product} favorited={true} />
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
export default connect(mapStateToProps)(MyFavoriteList);
