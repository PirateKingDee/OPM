import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Home extends Component {

  render() {
    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Link to="/sabo">
                  <img height="" className="img-responsive" src="http://s.pacn.ws/640/mm/excellent-model-one-piece-portrait-of-pirates-sailing-again-sabo-407039.1.jpg?o2s7ry"/>
                  <h4 className="text-center">Sabo</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="/luffy">
                  <img className="img-responsive" src="http://s.pacn.ws/640/s5/one-piece-excellent-model-portrait-of-pirates-sailing-again-18-s-506901.1.jpg?ojnkch"/>
                  <h4 className="text-center">Luffy</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="/solo">
                  <img className="img-responsive" src="http://s.pacn.ws/640/bf/pa.205821.2.jpg?o3fncg"/>
                  <h4 className="text-center">Solo</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <Link to="/kuma">
                  <img height="" className="img-responsive" src="http://s.pacn.ws/640/93/pa.163705.3.jpg?o32ibw"/>
                  <h4 className="text-center">Kuma</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="/hancock">
                  <img className="img-responsive" src="http://s.pacn.ws/640/9t/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-176768.6.jpg?oek1cs"/>
                  <h4 className="text-center">Hancock</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="/robin">
                  <img className="img-responsive" src="http://s.pacn.ws/640/cd/excellent-model-one-piece-sailing-again-18-scale-prepainted-pvc-222571.5.jpg?oejzgg"/>
                  <h4 className="text-center">Robin</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <Link to="/rayleigh">
                  <img height="" className="img-responsive" src="http://s.pacn.ws/640/az/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-197579.7.jpg?oek0m3"/>
                  <h4 className="text-center">Rayleigh</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="whiteBeard">
                  <img className="img-responsive" src="http://s.pacn.ws/640/gk/excellent-model-one-piece-portraits-of-pirates-non-scale-neoex-p-298303.10.jpg?oei5ce"/>
                  <h4 className="text-center">WhiteBeard</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
              <div className="col-sm-4">
                <Link to="/mr0">
                  <img className="img-responsive" src="http://s.pacn.ws/640/9q/pa.175440.4.jpg?o3rrrj"/>
                  <h4 className="text-center">Mr.0</h4>
                </Link>
                <h5 className="text-center">$15.00</h5>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
