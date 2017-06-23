import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
export default class Rayleigh extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/az/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-197579.7.jpg?oek0m3"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                Rayleigh
              </p>
              <p>
                <strong>Description: </strong>
                One piece character Rayleigh.
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
