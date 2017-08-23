import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect }  from 'react-redux';
import setLoginModal from '/imports/ui/Redux/actions/setLoginModal.js';
import setLoginUser from '/imports/ui/Redux/actions/setLoginUser.js';
class Header extends Component {
  render() {
    let{ curPage, currentUser, isLogin,dispatch, loginModal, loginUser, cartItems} = this.props;
    console.log('cart', cartItems);
    dispatch(setLoginModal(isLogin));
    if(isLogin){
      dispatch(setLoginUser(currentUser._id));
    }
    let logout = () => {
      Meteor.logout();
      dispatch(setLoginUser(null));
    }
    var cartItemTotal = 0;
    if(cartItems != null){
      cartItems.map(function(item){
        cartItemTotal += item.quantity;
      })
    }

    return (
      <div className="title">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">One Piece Models</a>
            </div>
            <ul className="nav navbar-nav">
              <li className={curPage=="home" ? "active" : null }><Link to="/">Home</Link></li>
              <li className={curPage=="blog" ? "active" : null }><Link to="/blog">Blog</Link></li>
              <li className={curPage=="favorite" ? "active" : null }><Link to="/my_shop">My Shop</Link></li>
              <li className={curPage=="allUser" ? "active" : null }><Link to="/shop">All Shops</Link></li>
              <li className={curPage=="instagram" ? "active" : null }><Link to="/instagram">Instagram</Link></li>

            </ul>


            {isLogin ?
              <ul className="nav navbar-nav navbar-right">
                <li className={curPage=="profile" ? "active" : null}><Link to={"/profile/"+currentUser.profile.name}><span className="glyphicon glyphicon-user"></span></Link></li>
                <li><a className="cart_a"><span className="cart_number">{cartItemTotal}</span></a></li>
                {/* <li className={curPage=="cart" ? "active" : null }><Link to="/cart_items"><span  className="glyphicon glyphicon-shopping-cart"></span>Cart</Link></li> */}
                <li className={curPage=="cart" ? "active" : null }><a href="/cart_items"><span  className="glyphicon glyphicon-shopping-cart"></span>Cart</a></li>
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
