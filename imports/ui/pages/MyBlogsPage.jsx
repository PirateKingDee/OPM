import React, {Component} from 'react';
import MyBlogGrid from '/imports/ui/components/blog/MyBlogGrid.jsx';
export default class MyBlogsPage extends Component {

  render() {
    if(this.props.loading){
      return(
        <div>Loading</div>
      )
    }
    else{
      let {blogs} = this.props;
      let listBlogs = blogs.map(function(blog, i){
        return <div><MyBlogGrid key={i} id={blog._id} title={blog.title}  imgSrc={blog.coverImgSrc} author={blog.author} />
        </div>
      });
      return (
        <div className="row">
          {listBlogs}
        </div>
      )
    }

  }
}
