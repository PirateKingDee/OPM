import React, {Component} from 'react';

export default class Luffy extends Component {

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-sm-4">
              {/* <div className="container"> */}
                <img height="300px" width="300px" className="img-thumbnail" src="http://s.pacn.ws/640/s5/one-piece-excellent-model-portrait-of-pirates-sailing-again-18-s-506901.1.jpg?ojnkch"/>
              {/* </div> */}
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Name: </strong>
                Luffy
              </p>
              <p>
                <strong>Description: </strong>
                One piece character Luffy.
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
