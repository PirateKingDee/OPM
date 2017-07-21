import React, {Component} from 'react';

export default class DeleteButton extends Component {

  render() {
    let productId = this.props.product_id;
// console.log('Delete id',this.props.product_id);
    let remove = () => {
      //console.log('Delete id',this.props.product_id);
      Meteor.call("removeProduct", productId, function(error, result){
        if(result === 'success'){
          console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });
    }
    return (
      <button onClick={remove}>Delete</button>
    )
  }
}
