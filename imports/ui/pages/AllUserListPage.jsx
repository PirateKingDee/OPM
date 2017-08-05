import React, {Component} from 'react';
import ProductHolder from '/imports/ui/components/Product/ProductHolder.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
import { Link } from 'react-router';
class AllUserListPage extends Component {

  render() {
    let {allUser, loginModal, loginUser, curPage, dispatch} = this.props;
    dispatch(setPage('allUser'));
    let listAllUser = allUser.map(function(user,i){
      return <div>{(user._id == loginUser && loginModal) ? <span><span>{user.profile.name} (Me)</span> <span>{user.favorited_number} items favorited</span></span>
      :
      <Link to={'/favorite_list/'+user.profile.name}><span>{user.profile.name}</span> <span>{user.favorited_number} items favorited</span></Link> }</div>
    })
    return (
        <div className="container bodyContainer">
          <div className="container">
            {listAllUser}
          </div>
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
export default connect(mapStateToProps)(AllUserListPage);
