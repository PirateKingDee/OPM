import React, {Component} from 'react';
import { Link } from 'react-router';
export default class ProductHolder extends Component {

  render() {
    let p = this.props.product;
    return (
      <div className="col-sm-3">
        <Link to={'/product/'+p._id}>
          {/* {console.log('id', p._id)} */}
          <img height="" className="img-responsive" src={p.image}/>
          <h4 className="text-center">{p.name}</h4>
        </Link>
        <h5 className="text-center">${p.price}</h5>
      </div>
    )
  }
}
