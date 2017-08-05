import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Blogs } from '/imports/api/blogs/blogs.js';
import OneBlogEditPage from '/imports/ui/pages/OneBlogEditPage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  const oneBlogSub = Meteor.subscribe('one_blog', id);

  const blog = Blogs.findOne();
  return {
    blog: blog,
    loading: !oneBlogSub.ready()
  };
}, OneBlogEditPage);
