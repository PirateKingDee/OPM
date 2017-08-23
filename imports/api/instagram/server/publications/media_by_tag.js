import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Instagram } from '/imports/api/instagram/instagram.js';

Meteor.publish("media_by_tag", function (tag){
  var self = this;
  var api = require('instagram-node').instagram();

  api.use({
    client_id: '106ddbab307347bd9af6b1e2749930e2',
    client_secret: 'dd2a4d00e75543d6b40a22e0cb157980'
  });
  api.use({ access_token: '1565140394.106ddba.0c2920998531475e8b3df6c09b0d1149' });
  api.tag_media_recent(tag, Meteor.bindEnvironment(function(err, medias, pagination, remaining, limit) {
    if(err){
      console.log('err', err);
    }
    else{
      console.log('medias', medias);
      console.log('pagination', pagination);
      console.log('remaining', remaining);
      console.log('limit', limit);
      medias.map(function(media){
        media._id = media.id;
        self.added('mediaByTag', media._id, media);
      })
    }
  }));
});

//get by tags
