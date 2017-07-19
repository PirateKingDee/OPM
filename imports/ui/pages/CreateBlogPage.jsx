import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw} from 'draft-js';
import ShowBlog from '/imports/ui/components/blog/ShowBlog.jsx';
import {browserHistory} from 'react-router';

export default class CreateBlogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }


  render() {
    const {editorState} = this.state;
    var contentState = editorState.getCurrentContent();

    let post = () => {
      let raw = convertToRaw(contentState);
      let blog = {
        rawContent: raw,
        title: this.refs.title.value
      }
      Meteor.call("insertBlog", blog);
      browserHistory.push("/blog");
    }
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="usr">Title:</label>
          <input ref="title" type="text" className="form-control" id="usr" />
        </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button className="btn btn-primary" onClick={post}>Post</button>
      </div>

    );
  }
}
