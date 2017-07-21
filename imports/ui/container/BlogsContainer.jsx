import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '/imports/api/blogs/blogs.js';
import BlogPage from '/imports/ui/pages/BlogPage.jsx';

export default createContainer((props) => {
  const blogSub = Meteor.subscribe('all_blogs');
  let selector = {};
  const blogs = Blogs.find(selector).fetch();

  return {
    blogs: blogs,
    loading: !blogSub.ready()
  };
}, BlogPage);
