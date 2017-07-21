import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';
Meteor.methods({
  updateBlog: function(rawContent, blogId){
    console.warn('rawContent'. rawContent);
    console.warn('blogId'. blogId);
    let blogUpdate = Blogs.update({_id:blogId}, {$set:{rawContent:rawContent}});
    if(blogUpdate) {
        return "success";
    } else {
        return "error";
    }
  },
})
