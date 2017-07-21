import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import setLoginModal from '/imports/ui/Redux/actions/setLoginModal.js';
import setLoginUser from '/imports/ui/Redux/actions/setLoginUser.js';
class Header extends Component {
  render() {
    let{ curPage, currentUser, isLogin,dispatch, loginModal, loginUser} = this.props;
    dispatch(setLoginModal(isLogin));
    if(isLogin){
      dispatch(setLoginUser(currentUser._id));
    }
    let logout = () => {
      Meteor.logout();
      dispatch(setLoginUser(null));
    }
    return (
      <div className="title">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">One Piece Models</a>
            </div>
            <ul className="nav navbar-nav">
              <li className={curPage=="home" ? "active" : null }><Link to="/">Home</Link></li>
              <li className={curPage=="blog" ? "active" : null }><Link to="/blog">Blog</Link></li>
            </ul>

            {isLogin ?
              <ul className="nav navbar-nav navbar-right">
                <li><a><span onClick={logout} className="glyphicon glyphicon-log-out"></span>Logout</a></li>
              </ul>
              : <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
              </ul>
              }

          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    loginUser: state.loginUser,
    curPage: state.curPage
  };
}
export default connect(mapStateToProps)(Header);
