import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Instagram } from '/imports/api/instagram/instagram.js';

import InstagramPage from '/imports/ui/pages/Instagram/InstagramPage.jsx';

export default createContainer((props) => {
  const instagramSub = Meteor.subscribe('recent_media');
  let selector = {};
  const medias = Instagram.find(selector).fetch();
  console.log('container medias', medias);

  return {
    medias: medias,
    loading: !instagramSub.ready()
  };
}, InstagramPage);
