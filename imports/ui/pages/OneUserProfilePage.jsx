import React, {Component} from 'react';
import { Link } from 'react-router';
import BlogGrid from '/imports/ui/components/blog/BlogGrid.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
class OneUserProfilePage extends Component {

  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      let {loginModal, loginUser, curPage, dispatch, products, favoritedList, user} = this.props;
      console.log('curUser',user);
      dispatch(setPage("profile"));

      return (
        <div className="container bodyContainer text-center">
          <h1>{user.profile.name}</h1>
          <h3>Reward: {typeof(user.reward)!="undefined" ? user.reward : 0}</h3>
        </div>
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    loginModal: state.loginModal,
    loginUser: state.loginUser,
    curPage: state.curPage
  };
}
export default connect(mapStateToProps)(OneUserProfilePage);
