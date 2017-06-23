import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import ProductHolder from '/imports/ui/components/ProductHolder.jsx';
export default class Home extends Component {

  render() {
    if(!this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let products = this.props.products;
      let productList = products.map(function(product, i){
        return <ProductHolder key={product._id} product={product} />
      });
      return (
          <div>
            <div className="container">
              {productList}
            </div>
          </div>
      )
    }
  }
}
