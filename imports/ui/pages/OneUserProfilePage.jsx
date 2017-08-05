import React, {Component} from 'react';
import { Link } from 'react-router';
export default class OneUserProfilePage extends Component {

  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      return (
        <div className="container bodyContainer">
          
        </div>
      )
    }
  }
}
