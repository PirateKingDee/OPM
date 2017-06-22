import React, {Component} from 'react';

export default class Solo extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/bf/pa.205821.2.jpg?o3fncg"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                Solo
              </p>
              <p>
                <strong>Description: </strong>
                One piece character Solo.
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
