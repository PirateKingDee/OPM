import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
class ProductHolder extends Component {

  render() {
    let {product, favorited, loginModal} = this.props;
    return (
      <div className="col-sm-3">
        <Link to={'/product/'+product._id}>
          <img height="" className="img-responsive" src={product.image}/>
          <h4 className="text-center">{product.name}</h4>
        </Link>
        <h5 className="text-center">${product.price}</h5>
        {loginModal ? favorited? <p>Favorited</p> : <p>Not Favorited</p> : null}
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
export default connect(mapStateToProps)(ProductHolder);
