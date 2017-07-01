import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Signup from '/imports/ui/pages/Signup.jsx';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      signup: false
    }
  }

  render() {
    let login = () => {
      const email = this.refs.email.value.trim();
      const pwd = this.refs.password.value.trim();
      Meteor.loginWithPassword(email, pwd, (error) => {
        if (error) {
          return Bert.alert('Invalid Email Address and/or Password. Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          browserHistory.push('/')
        }
      });
    }
    let register = () => {
      this.setState({'signup':!this.state.signup});
    }
    return (
      <div>
        {this.state.signup ? <div><Signup />
          <span onClick={register}>Already member? Login here!</span></div> :
          <div>
            <div className="col-sm-3"></div>
            <div className="container signup_form col-sm-6 well well-lg">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input ref="email" type="text" className="form-control" id="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input ref="password" type="password" className="form-control" id="pwd"/>
              </div>
              <button onClick={login} type="submit" className="btn btn-primary pull-right">Sign In</button>
            </div>
            <div className="col-sm-3"></div>
            <span onClick={register}>New User? Register here!</span>
          </div>
        }
      </div>

    )
  }
}
