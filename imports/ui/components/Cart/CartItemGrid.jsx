import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
class CartItemPage extends Component {

  render() {
    let {cartItem, favorited, loginModal} = this.props;
    console.log('cartItem',cartItem);
    let updateQuantity = () => {
      let qty = parseInt($('#'+cartItem._id).val());
      Meteor.call('updateQuantity', cartItem._id, qty, function(error, result){
        if(result === 'success'){
          console.log('success');
        }
        else{
          console.log('error');
          return;
        }
      })
    }
    return (
      <div className="col-sm-10">
        <Link to={'/product/'+cartItem.product_id}>
          <div className="col-sm-2">
            <img height="75%" width="75%" src={cartItem.product_image}/>
          </div>
        </Link>
          <div className="col-sm-3">
            <Link to={'/product/'+cartItem.product_id}>
              <h4 className="text-center">{cartItem.product_name}</h4>
            </Link>
            <span>Delete</span><span> &#124; </span><span>Save for later</span>
          </div>


        <div className="col-sm-3">
          <h5 className="text-center">${cartItem.product_price}</h5>
        </div>
        <div className="col-sm-3">
          <div className="text-center">
            <input  onChange={updateQuantity} ref={(input) => qtyInput = input} className="quantity_input" id={cartItem._id} type="number" defaultValue={cartItem.quantity} size="3" min="1"/>
          </div>

          {/* <h5 className="text-center">{cartItem.quantity}</h5> */}
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
