import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import OneUserProfilePage from '/imports/ui/pages/OneUserProfilePage.jsx';
export default createContainer((props) =>{
  const id = props.params.id;
  console.log('id',id);
  // const oneBlogSub = Meteor.subscribe('one_blog', id);
  //
  // const blog = Blogs.findOne();
  // return {
  //   blog: blog,
  //   loading: !oneBlogSub.ready()
  // };
}, OneUserProfilePage);
