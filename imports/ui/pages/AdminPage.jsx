import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router';
import AdminProductHolder from '/imports/ui/components/AdminProductHolder.jsx';
import InsertButton from '/imports/ui/components/buttons/InsertButton.jsx';
export default class AdminPage extends Component {

  render() {
    if(this.props.loading){
      return <h1>loading</h1>;
    }
    else{
      let products = this.props.products;
      let productList = products.map(function(product, i){
        return <AdminProductHolder key={product._id} product={product} />
      });
      return (
          <div>
            <div className="container">
              <InsertButton />
              {productList}
            </div>
          </div>
      )
    }
  }
}
