import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
import { Link } from 'react-router';
import accounting from 'accounting';
import Rating from '/imports/ui/components/Rating.jsx';
export default class ProductDetail extends Component {

  render() {
    let product = this.props.product;
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
              <img height="300px" width="300px" className="img-thumbnail" src={product.image}/>
          </div>
          <div className="col-sm-8">
            <p className="lala">
              <strong>Review: </strong>
              <Rating rating={product.rating} />

            </p>
            <p className="lala">
              <strong>Name: </strong>
              {product.name}
            </p>
            <p>
              <strong>Price: </strong>
              {accounting.formatMoney(product.price)}
            </p>
            <p>
              <strong>Ship: </strong>
              {accounting.formatMoney(product.shipping)}
            </p>
            <AddToCartButton/>
          </div>
        </div>

      </div>
    )
  }
}
