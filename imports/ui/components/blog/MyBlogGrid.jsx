import React, {Component} from 'react';
import { Link } from 'react-router';
export default class BlogGrid extends Component {

  render() {
    let {id,title, imgSrc, author} = this.props;
    let deleteBlog = () => {
      Meteor.call("removeBlog", id);
    }
    return (
      <div className="col-sm-4 text-center">
        <Link  to={'/blog/'+id}>
          {imgSrc != null ? <img className="img-responsive center-block" src={imgSrc} /> : null}
          <h2 className="text-center">{title}</h2>
        </Link>
        <h4 className="text-center ">By: {author}</h4>
        <span >
          <Link to={'/blog/edit/'+id}><button>Edit</button></Link>
          <button onClick={deleteBlog}>Delete</button>
        </span>
      </div>
    )
  }
}
