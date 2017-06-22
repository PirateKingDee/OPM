import React, {Component} from 'react';

export default class Hancock extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/9t/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-176768.6.jpg?oek1cs"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                Hancock
              </p>
              <p>
                <strong>Description: </strong>
                One piece character Kuma.
              </p>
              <p>
                <strong>Price: </strong>
                $15.00
              </p>
              <p>
                <strong>Ship: </strong>
                Free
              </p>
              <button className="btn">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
    )
  }
}
