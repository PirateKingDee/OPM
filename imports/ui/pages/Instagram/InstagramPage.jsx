import React, {Component} from 'react';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
import {browserHistory} from 'react-router';
class InstagramPage extends Component {


  render() {
    if(this.props.loading){
      return(
        <div>
          Loading...
        </div>
      )
    }
    else{
      let {medias,loginModal, loginUser, curPage, dispatch} = this.props;
      console.warn('mediasssss', medias);
      dispatch(setPage("instagram"));
      let mediasList = medias.map(function(media,i){
          return <div className="col-xs-4" >
            <a href={media.link}>
              <img key={i} src={media.images.low_resolution.url} height={320} width={320} />
            </a>
          </div>
      })

      let search = () => {
        console.log(this.refs.tag.value.trim());
        browserHistory.push('/instagram/'+this.refs.tag.value.trim());
      }
      return (
        <div className="container bodyContainer">
          <label>search by tag</label>
          <input type="text" ref="tag" />
          <button onClick={search}>search</button>
          <div className="row" >
            {mediasList}
          </div>

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
export default connect(mapStateToProps)(InstagramPage);
