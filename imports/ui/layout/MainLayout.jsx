import React, {Component} from 'react';
import Header from './Header.jsx';
// import Footer from '../components/Main/Footer.jsx';

export default class MainLayout extends Component {

  render() {
    if(this.props.loading){
      return <div>Loading</div>
    }
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
