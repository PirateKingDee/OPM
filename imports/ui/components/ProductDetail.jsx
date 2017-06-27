import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
import { Link } from 'react-router';
import accounting from 'accounting';
export default class ProductDetail extends Component {

  render() {
    let product = this.props.product;
    let reviews = product.review;
    //console.log('product',product);

    // let review = () => {
    //   if(props.product.review==1){
    //     console.log('review',reviews);
    //     return <div><img height="35px" width="35px" src="/images/chopper_icon.gif" /></div>
    //   }
    //   else{
    //     console.log('review',reviews);
    //     return <div>
    //       <img height="35px" width="35px" src="/images/chopper_icon.gif" />
    //       <img height="35px" width="35px" src="/images/chopper_icon.gif" />
    //     </div>
    //   }
    // }

    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
              <img height="300px" width="300px" className="img-thumbnail" src={product.image}/>
          </div>
          <div className="col-sm-8">
            <p className="lala">
              <strong>Review: </strong>
              <img height="35px" width="35px" src="/images/chopper_icon.gif" />
              <img height="35px" width="35px" src="/images/chopper_icon.gif" />
              <img height="35px" width="35px" src="/images/chopper_icon.gif" />

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
