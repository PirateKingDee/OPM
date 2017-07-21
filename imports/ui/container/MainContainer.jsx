import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';

export default createContainer((props) => {
  const userSub = Meteor.subscribe('current_user');
  let selector = {};
  let user = Meteor.user();
  console.warn('user', user);
  return {
    loading: !userSub.ready(),
    currentUser: user,
    isLogin: !!Meteor.userId()
  };
  console.log('on container', !!Meteor.userId());
}, MainLayout);
