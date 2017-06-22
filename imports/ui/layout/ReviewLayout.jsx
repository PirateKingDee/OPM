import React, {Component} from 'react';
import Review from './Review.jsx';
// import Footer from '../components/Main/Footer.jsx';

export default class ReviewLayout extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <Review/>
      </div>
    );
  }
}

ReviewLayout.propTypes = {
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
