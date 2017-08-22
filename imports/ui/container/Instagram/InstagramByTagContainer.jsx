import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';
import { Instagram } from '/imports/api/instagram/instagram.js';

import InstagramPage from '/imports/ui/pages/Instagram/InstagramPage.jsx';
MediaByTag = new Mongo.Collection('mediaByTag');
export default createContainer((props) => {

  var tag = props.params.tag;
  const instagramSub = Meteor.subscribe('media_by_tag', tag);
  let selector = {};
  const medias = MediaByTag.find(selector).fetch();

  console.log('container medias', medias);
  console.log('this',this);

  return {
    medias: medias
    // loading: !instagramSub.ready()
  };
}, InstagramPage);
