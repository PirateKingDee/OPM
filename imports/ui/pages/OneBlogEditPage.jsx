import React, {Component} from 'react';
import { Link } from 'react-router';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
export default class OneBlogEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty(),
    empty:true};
  }

  handleChange = editorState => {
    const content = convertToHTML(editorState.getCurrentContent());
    this.state = {editorState: editorState};
  }
  render() {
    if(this.props.loading){
      return <div>loading</div>;
    }
    else{
      let blog = this.props.blog;
      let rawcontent = convertFromRaw(blog.rawContent);
      if(this.state.empty==true){
        this.state = {
          editorState: EditorState.createWithContent(rawcontent),
          empty: false
        };
      }

      const {editorState} = this.state;
      console.log('emyty', this.state.empty);
      console.log('editorstate', this.state.editorState);
      console.log('content', convertToRaw(this.state.editorState.getCurrentContent()));
      let update = () => {
        let rawContent = convertToRaw(this.state.editorState.getCurrentContent());
        Meteor.call('updateBlog', rawContent, blog._id, function(error, result){
          if(result === 'success'){
            console.warn("successful");
          }
          else{
            console.warn("error");
            return;
          }
        });
      }
      return (
        <span>
          <h1 className="text-center">{blog.title}</h1>
          <Editor defaultEditorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          onEditorStateChange={this.handleChange} />
          <button className="btn btn-primary pull-right" onClick={update}>update</button>
        </span>
      )
    }
  }
}
