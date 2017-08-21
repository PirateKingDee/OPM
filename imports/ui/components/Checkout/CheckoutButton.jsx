import React, {Component} from 'react';

export default class CheckoutButton extends Component {

  render() {
    let {cartList, totalCost, totalItem} = this.props;
    let addOrder = () => {
      let order = {
        items: cartList,
        total: totalCost,
        totalItem: totalItem,
        status: "pending"
      }
      Meteor.call('addPendingOrder', order, function(error, result){
        if(result === "success"){
          console.log('success');
          cartList.map(function(cartItem){
            let out = false;
            if(typeof(cartItem.referById)!= "undefined"){
              let reward = (cartItem.product_price * cartItem.quantity * 0.1).toFixed(2);
              console.log(reward);
              Meteor.call('addReward', cartItem.referById, reward, function(error, result){
                if(result === 'success'){
                  console.log('success');
                }
                else{
                  console.warn('error');
                  return;
                }
              });
            }

            Meteor.call('removeFromCart', cartItem._id, function(error, result){
              if(result === "success"){
                console.log('remove success');
              }
              else{
                console.log('remove fail');
                return
              }
            })
          });

        }
        else{
          console.log('error');
          return;
        }
      })
    }
    return (
      <button onClick={addOrder} className="btn btn-warning">Checkout</button>
    )
  }
}
