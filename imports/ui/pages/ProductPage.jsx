import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import ProductDetail from '/imports/ui/components/ProductDetail.jsx';
import Review from '/imports/ui/components/Review.jsx';
export default class ProductPage extends Component {

  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let product = this.props.product;
      // let productList = product.map(function(product, i){
      //   return <ProductHolder key={product._id} product={product} />
      // });
      return (
          <div>
            <div className="container">
              <ProductDetail product={product} />
              <Review product={product} />
            </div>
          </div>
      )
    }
  }
}
