import React, {Component} from 'react';

export default class AddToCartButton extends Component {

  render() {
    return (
      <div className="row">
        <img height="20px" width="20px" src="https://pbs.twimg.com/profile_images/424206761910743040/QHCSwVMA.png"/>
        <button className="btn btn-success">
          Add to Cart
        </button>
        <img height="20px" width="20px" src="https://pbs.twimg.com/profile_images/424206761910743040/QHCSwVMA.png"/>

      </div>
    )
  }
}
