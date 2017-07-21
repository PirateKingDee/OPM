import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';
Meteor.methods({
  removeBlog: function(blogId){

      let blogRemove = Blogs.remove(blogId);
      if(blogRemove) {
          return "success";
      } else {
          return "error";
      }
  },
})
