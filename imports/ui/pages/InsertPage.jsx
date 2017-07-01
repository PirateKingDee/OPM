import React, {Component} from 'react';

export default class InsertPage extends Component {

  render() {
    let insertProduct = () => {
      let name = this.refs.name.value.trim();
      let product_id = this.refs.product_id.value.trim();
      let price = this.refs.price.value.trim();
      let image = this.refs.image.value.trim();
      let productDescription = this.refs.description.value;
      product = {
        product_id: product_id,
        name:name,
        description: productDescription,
        price:price,
        image: image
      }
      console.log('product',product);
      Meteor.call("insertProduct", product, function(error, result){
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
      <div>
        <div className="container signup_form col-sm-6 well well-lg">
          <div className="form-group">
            <label htmlFor="name">Prodcut Name:</label>
            <input ref="name" type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="product_id">Product ID:</label>
            <input ref="product_id" type="text" className="form-control" id="product_id"/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input ref="price" type="number" className="form-control" id="price"/>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input ref="image" type="text" className="form-control" id="image"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description:</label>
            <input ref="description" type="text" className="form-control" id="description"/>
          </div>
          <button onClick={insertProduct} type="submit" className="btn btn-primary pull-right">Create</button>
        </div>
      </div>
    )
  }
}
