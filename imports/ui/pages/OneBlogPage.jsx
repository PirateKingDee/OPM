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
      let html = stateToHTML(content);
      const blocksFromHTML = convertFromHTML(html);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      this.state = {
        editorState: EditorState.createWithContent(state),
      };

      return (
        <span>
          <Editor editorState={this.state.editorState} readOnly/>
        </span>

      )
    }
  }
}
