import React, {Component} from 'react';
import { Link } from 'react-router';
export default class AddToCartButton extends Component {

  render() {
    return (
      <div className="row add_to_cart_btn">
        {/* <img height="256px" width="256px" src='/images/luffy_icon.png' /> */}
        <Link to="/">

          <button className="btn btn-success">
            <img height="20px" width="20px" src="/images/luffy_icon.png" />
            Add to Cart
            <img height="20px" width="20px" src="/images/luffy_icon.png"/>
          </button>

        </Link>
      </div>
    )
  }
}
