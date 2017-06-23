import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
export default class Mr0 extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/9q/pa.175440.4.jpg?o3rrrj"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                Mr0
              </p>
              <p>
                <strong>Description: </strong>
                One piece character Mr0.
              </p>
              <p>
                <strong>Price: </strong>
                $15.00
              </p>
              <p>
                <strong>Ship: </strong>
                Free
              </p>
              <AddToCartButton/>
            </div>
          </div>

        </div>
    )
  }
}
