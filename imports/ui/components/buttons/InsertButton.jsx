import React, {Component} from 'react';
import { Link } from 'react-router';
export default class InsertButton extends Component {

  render() {
    return (
      <div>
        <Link to="/insert"><button className="btn btn-primary">Insert</button></Link>
      </div>
    )
  }
}
