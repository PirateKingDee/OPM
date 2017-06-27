import React, {Component} from 'react';

export default class Rating extends Component {

  render() {
    let rating = this.props.rating;
    // let name = this.props.name;
    // let date = this.props.date;
    // let dateString = date.getMonth()+1+"/"+date.getDate()+", "+date.getFullYear();
    // console.log('date',dateString);
    if(rating <= 1){
      return(
        <span className="">
          {/* <span >By: </span><span className="username" >{name}</span> */}
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          {/* <span>On </span><span>{dateString}</span> */}
        </span>
      )
    }
    else if(rating <= 2){
      return(
        <span className="">
          {/* <span >By: </span><span className="username" >{name}</span> */}
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          {/* <span>On </span><span>{dateString}</span> */}
        </span>
      )
    }
    else if(rating <= 3){
      return(
        <span className="">
          {/* <span >By: </span><span className="username" >{name}</span> */}
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          {/* <span>On </span><span>{dateString}</span> */}
        </span>
      )
    }
    else if(rating <= 4){
      return(
        <span className="">
          {/* <span >By: </span><span className="username" >{name}</span> */}
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          {/* <span>On </span><span>{dateString}</span> */}
        </span>
      )
    }
    else {
      return(
        <span className="">
          {/* <span >By: </span><span className="username" >{name}</span> */}
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          <img height="25px" width="25px" src="/images/chopper_icon.gif" />
          {/* <span>On </span><span>{dateString}</span> */}
        </span>
      )
    }

  }
}
