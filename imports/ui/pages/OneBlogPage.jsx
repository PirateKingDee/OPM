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

  componentWillUpdate(){
  //
    var iframe = document.getElementsByTagName("iframe");
    console.warn(iframe);
  //   // get the window associated with that iframe
  //   var iWindow = iframe.contentWindow;
  //
  //   // wait for the window to load before accessing the content
  //   iWindow.addEventListener("load", function() {
  //       // get the document from the window
  //       var doc = iframe.contentDocument || iframe.contentWindow.document;
  //
  //       // find the target in the iframe content
  //       var target = doc.getElementById("target");
  //       target.innerHTML = "Found It!";
  //       console.log('html', target.innetHTML);
  //   });
  //
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
      var iframe = document.getElementById("iframe");
      if(iframe){
        console.warn(iframe);
        // // get the window associated with that iframe
        var iWindow = iframe[0].contentWindow;
      }

      //
      // // wait for the window to load before accessing the content
      // iWindow.addEventListener("load", function() {
      //     // get the document from the window
      //     var doc = iframe.contentDocument || iframe.contentWindow.document;
      //
      //     // find the target in the iframe content
      //     var target = doc.getElementById("target");
      //     target.innerHTML = "Found It!";
      //     console.log('html', target.innetHTML);
      // });



// document.getElementsByTagName("VIDEO")[0].removeAttribute("aoutoplay");

      return (
        <span>
          <div className="container bodyContainer">
            <h1 className="text-center">{blog.title}</h1>
            <Editor editorState={this.state.editorState} toolbarHidden readOnly/>
          </div>

        </span>
      )
    }
  }
}
