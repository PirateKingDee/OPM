import React, {Component} from 'react';
import AddToCartButton from '/imports/ui/components/AddToCartButton.jsx';
export default class WhiteBeard extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/gk/excellent-model-one-piece-portraits-of-pirates-non-scale-neoex-p-298303.10.jpg?oei5ce"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                WhiteBeard
              </p>
              <p>
                <strong>Description: </strong>
                One piece character WhiteBeard.
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
