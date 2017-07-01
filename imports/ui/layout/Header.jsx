import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     login: props.isLogin
  //   }
  //   console.log('props.islogin', props.isLogin);
  // }

  render() {
    let{ currentUser, isLogin} = this.props;
    let logout = () => {

      Meteor.logout();
      //this.setState({'login': !this.state.login});
      console.log('userID',isLogin);

    }
    return (
      <div className="title">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">One Piece Models</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
            </ul>

            {isLogin ?
              <ul className="nav navbar-nav navbar-right">
                <li><a><span onClick={logout} className="glyphicon glyphicon-log-out"></span> Logout></a></li>
              </ul>
              : <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
              </ul>
              }

          </div>
        </nav>
      </div>
    )
  }
}
