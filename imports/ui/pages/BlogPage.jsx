import React, {Component} from 'react';
import { Link } from 'react-router';
import {CompositeDecorator,
        ContentBlock,
        ContentState,
        Editor,
        EditorState,
        convertFromHTML,
        convertFromRaw,} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      let blogs = this.props.blogs;
      let blogList = blogs.map(function(blog){
        return <Link to={'/blog/'+blog._id}><h4>{blog.title}</h4></Link>
      })

      return (
        <span>
          {blogList}
          <Link to="/blog/write"><button className="btn btn-primary">write block</button></Link>
        </span>

      )
    }
  }
}
