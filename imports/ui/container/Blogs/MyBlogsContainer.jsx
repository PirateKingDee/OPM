import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '/imports/api/blogs/blogs.js';
import MyBlogsPage from '/imports/ui/pages/MyBlogsPage.jsx';

export default createContainer((props) => {
  let userId = Meteor.userId();
  const blogSub = Meteor.subscribe('my_blogs', userId);
  let selector = {};
  const blogs = Blogs.find(selector).fetch();
  console.log('myblogs', blogs);
  return {
    blogs: blogs,
    loading: !blogSub.ready()
  };
}, MyBlogsPage);
