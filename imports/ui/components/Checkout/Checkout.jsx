import React, {Component} from 'react';
import CheckoutButton from '/imports/ui/components/Checkout/CheckoutButton.jsx';
export default class Checkout extends Component {

  render() {
    let {cartList} = this.props;
    let totalCost = 0;
    let totalItem = 0;
    cartList.map(function(cartItem){
      totalCost += cartItem.product_price * cartItem.quantity;
      totalItem += cartItem.quantity;
    })
    return (
      <div className="col-sm-12">
        <h4>
          Checkout Summary:
        </h4>
        <h5>Subtotal ({totalItem} items): ${totalCost}</h5>
        <CheckoutButton cartList={cartList} totalCost={totalCost} totalItem={totalItem} />
      </div>
    )
  }
}
