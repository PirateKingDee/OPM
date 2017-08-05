import React, {Component} from 'react';
import { Link } from 'react-router';
export default class AddToCartButton extends Component {

  render() {
    let { product, isLogin} = this.props;
    let addToCart = () => {
      if(!isLogin){
        console.log('need to login');
        return;
      }
      let qty = parseInt($('#qtyInput').val());
      let item = {
        product_id: product._id,
        quantity: parseInt(qty)
      }
      Meteor.call('addToCart', item, function(error, result){
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
      <div className="row add_to_cart_btn">
          <button className="btn btn-success" onClick={addToCart}>
            <img height="20px" width="20px" src="/images/luffy_icon.png" />
            Add to Cart
            <img height="20px" width="20px" src="/images/luffy_icon.png"/>
          </button>
          <input ref={(input) => qtyInput = input} className="quantity_input" id="qtyInput" type="number" defaultValue="1" size="3"/>

      </div>
    )
  }
}
