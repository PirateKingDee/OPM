import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, convertToRaw} from 'draft-js';
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
      if(this.refs.title.value == ""){
        return Bert.alert('Please give it a title.', 'danger', 'fixed-top', 'fa-frown-o');
      }
      if(this.refs.coverImg.value.trim() == ""){
        return Bert.alert('Please give it cover picture.', 'danger', 'fixed-top', 'fa-frown-o');
      }
      let raw = convertToRaw(contentState);
      console.log('raw', raw);
      let blog = {
        rawContent: raw,
        title: this.refs.title.value,
        coverImgSrc: this.refs.coverImg.value.trim()
      }
      Meteor.call("insertBlog", blog);
      browserHistory.push("/blog");
    }
    return (
      <div className="container">
        <div className="posting-block">
          <div className="form-group">
            <label htmlFor="usr">Title:</label>
            <input ref="title" type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="cover">Cover Picture:</label>
            <input ref="coverImg" type="text" className="form-control" id="cover" />
          </div>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
          <button className="btn btn-primary pull-right" onClick={post}>Post</button>
        </div>

      </div>

    );
  }
}
