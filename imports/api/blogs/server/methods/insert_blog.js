import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';
Meteor.methods({
  insertBlog: function(blog){
    let insertValue = blog;
    insertValue.user_id = Meteor.userId();
    insertValue.author = Meteor.user().profile.name;
      let blogInsert = Blogs.insert(insertValue);
      // console.log('productInsert', product);
      if(blogInsert) {
          return "success";
      } else {
          return "error";
      }
  },
})
