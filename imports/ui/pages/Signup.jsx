import React, {Component} from 'react';
import { browserHistory } from 'react-router';
export default class Signup extends Component {

  render() {
    let signup = () => {
      const name = this.refs.name.value.trim();
      const email = this.refs.email.value.trim();
      const pwd = this.refs.password.value.trim();
      const cpwd = this.refs.confirm_password.value.trim();
      const profile = {name:name};

      if(pwd != cpwd){
        return Bert.alert('Password not match. Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
      }

      else{
        console.log('password',pwd);
        let options = {password:pwd};
          Accounts.createUser({email:email, password: pwd, profile:profile}, error => {
          const userId = Meteor.userId();
        });
        browserHistory.push('/');
      }
    }
    return (
      <div>
        <div className="col-sm-3"></div>
        <div className="container signup_form col-sm-6 well well-lg">
          <div className="form-group">
            <label htmlFor="name">User Name:</label>
            <input ref="name" type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input ref="email" type="text" className="form-control" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input ref="password" type="password" className="form-control" id="pwd"/>
          </div>
          <div className="form-group">
            <label htmlFor="confirm_pwd">Password:</label>
            <input ref="confirm_password" type="password" className="form-control" id="confirm_pwd"/>
          </div>
          <button onClick={signup} type="submit" className="btn btn-primary pull-right">Sign Up</button>
        </div>
        <div className="col-sm-3"></div>
      </div>

    )
  }
}
