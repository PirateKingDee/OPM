import React, {Component} from 'react';

export default class Rating extends Component {

  render() {
    let rating = this.props.rating;
    if(rating == 0){
      return(
        <span>
          No rating
        </span>
      )
    }
    else if(rating <= 1){
      return(
        <span className="">
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
        </span>
      )
    }
    else if(rating <= 2){
      return(
        <span className="">
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
        </span>
      )
    }
    else if(rating <= 3){
      return(
        <span className="">
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
        </span>
      )
    }
    else if(rating <= 4){
      return(
        <span className="">
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
        </span>
      )
    }
    else {
      return(
        <span className="">
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
        </span>
      )
    }

  }
}
