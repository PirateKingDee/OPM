import React, {Component} from 'react';
import { Link } from 'react-router';
import BlogGrid from '/imports/ui/components/blog/BlogGrid.jsx';
import setPage from '/imports/ui/Redux/actions/setPage.js';
import { connect }  from 'react-redux';
class BlogPage extends Component {

  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      let {loginModal, loginUser, curPage, dispatch} = this.props;
      dispatch(setPage("blog"));
      let blogs = this.props.blogs;
      let blogList = blogs.map(function(blog, i){
        let imgSrc = blog.coverImgSrc;
        let author = blog.author;
        return <BlogGrid id={blog._id} title={blog.title} imgSrc={imgSrc} author={author}/>
      })
      return (
        <span>
          {loginModal ? <div className="navbar blog-nav"><Link to="/blog/write"><button className="btn write-btn pull-right">Write Blog</button></Link>
           <Link to="/blog/myblogs"><button className="btn write-btn pull-right">My Blogs</button></Link></div>
           : null}
          <div className="container">
            <div className="row">
              {blogList}
            </div>
          </div>
        </span>
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
export default connect(mapStateToProps)(BlogPage);
