import React, {Component} from 'react';
import { Link } from 'react-router';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertFromRaw,} from 'draft-js';
export default class OneBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      let blog = this.props.blog;
      let content = convertFromRaw(blog.rawContent);
      this.state = {
        editorState: EditorState.createWithContent(content),
      };

      return (
        <span>
          <h1 className="text-center">{blog.title}</h1>
          <Editor editorState={this.state.editorState} toolbarHidden readOnly/>
        </span>
      )
    }
  }
}
