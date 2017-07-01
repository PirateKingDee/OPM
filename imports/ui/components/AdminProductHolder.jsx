import React, {Component} from 'react';
import { Link } from 'react-router';
import DeleteButton from '/imports/ui/components/buttons/DeleteButton.jsx';
import EditButton from '/imports/ui/components/buttons/EditButton.jsx';
export default class ProductHolder extends Component {

  render() {
    let p = this.props.product;
    return (
      <div className="col-sm-3">
        <Link to={'/product/'+p._id}>
          <img height="" className="img-responsive" src={p.image}/>
          <h4 className="text-center">{p.name}</h4>
        </Link>
        <h5 className="text-center">${p.price}</h5>
        <DeleteButton product_id={p._id}/>
        <EditButton product_id={p.product_id}/>
      </div>
    )
  }
}
