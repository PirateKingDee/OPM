import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '/imports/api/blogs/blogs.js';
import OneBlogPage from '/imports/ui/pages/OneBlogPage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  const oneBlogSub = Meteor.subscribe('one_blog', id);

  const blog = Blogs.findOne();
  console.log(blog);
  return {
    blog: blog,
    loading: !oneBlogSub.ready()
  };
}, OneBlogPage);
