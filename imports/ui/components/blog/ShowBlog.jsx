import React, {Component} from 'react';

export default class ShowBlog extends Component {

  render() {
    let content = this.props.content;
    return (
      // content;
      <span>
        {content}
      </span>

    )
  }
}
