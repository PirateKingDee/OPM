import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';
Meteor.methods({
  insertBlog: function(blog){
      let blogInsert = Blogs.insert(blog);
      // console.log('productInsert', product);
      if(blogInsert) {
          return "success";
      } else {
          return "error";
      }
  },
})
