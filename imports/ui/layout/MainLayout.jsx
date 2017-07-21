import React, {Component} from 'react';
import Header from './Header.jsx';
import { Provider } from 'react-redux';
import Store from '/imports/ui/Redux/store/store';
// import Footer from '../components/Main/Footer.jsx';

export default class MainLayout extends Component {

  render() {
    if(this.props.loading){
      return <div>Loading</div>
    }
    return (
      <Provider store={Store}>
        <div>
          <Header {...this.props}/>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

MainLayout.propTypes = {
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
