import React, {Component} from 'react';
import { Link } from 'react-router';
export default class BlogGrid extends Component {

  render() {
    let {id,title, imgSrc, author} = this.props;
    return (
      <div className="col-sm-4">
        <Link  to={'/blog/'+id}>
          <h2 className="text-center">{title}</h2>
          {imgSrc != null ? <img className="img-responsive center-block" src={imgSrc} /> : null}
        </Link>
        <h4 className="text-center ">By: {author}</h4>
      </div>
    )
  }
}
