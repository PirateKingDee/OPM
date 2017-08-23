import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Instagram } from '/imports/api/instagram/instagram.js';
import { HTTP } from 'meteor/http';

// try {
//   const result = HTTP.call('POST', 'https://api.instagram.com/oauth/authorize/?client_id=106ddbab307347bd9af6b1e2749930e2&redirect_uri=http://localhost:3000&response_type=code', {
//   }, (error, result) => {
//     if(error){
//       console.warn('error', error);
//     }
//     console.log('result', result);
//   });
//   return true;
// } catch (e) {
//   // Got a network error, timeout, or HTTP error in the 400 or 500 range.
//   console.log('caught error', e);
//   return false;
// }

var api = require('instagram-node').instagram();
api.use({
  client_id: '106ddbab307347bd9af6b1e2749930e2',
  client_secret: 'dd2a4d00e75543d6b40a22e0cb157980'
});
api.use({ access_token: '1565140394.106ddba.0c2920998531475e8b3df6c09b0d1149' });
api.user_media_recent('1565140394',Meteor.bindEnvironment(
  function(err, medias, pagination, remaining, limit) {
    if(err){
      console.log('medias err', err);
    }
    else{
      console.log('pagination', pagination);
      medias.map(function(media){
        media._id = media.id;
        Instagram.upsert({_id:media._id},{$set:media});
      })
    }
  }
));







// var accessToken = '1565140394.106ddba.0c2920998531475e8b3df6c09b0d1149';
// var InstagramAPI = require('instagram-api');
// var instagramAPI = new InstagramAPI(accessToken);
// instagramAPI.userMedia("1565140394").then(Meteor.bindEnvironment(function(result) {
//       // console.log(result.data); // user info
//       // console.log(result.limit); // api limit
//       // console.log(result.remaining) // api request remaining
//       console.log('result',result);
//
//       result.data.map(function(media){
//         media._id = media.id;
//         Instagram.upsert({_id:media._id},{$set:media});
//       })
//   }, function(err){
//       console.log(err); // error info
//   }));
// console.log('getMediasByTag',instagramAPI.getMediasByTag("vape") );



  // instagramAPI.getMediasByTag("vape").then(Meteor.bindEnvironment(function(result) {
  //       // console.log(result.data); // user info
  //       // console.log(result.limit); // api limit
  //       // console.log(result.remaining) // api request remaining
  //       var curResult = result;
  //       console.log('curResult', curResult.data);
  //       curResult.data.map(function(media){
  //         media._id = media.id;
  //         Instagram.upsert({_id:media._id},{$set:media});
  //       })
  //   }, function(err){
  //       console.log(err); // error info
  //   }));
// let u =   instagramAPI.userSelf().then(function(result) {
//     console.log(result.data); // user info
//     console.log(result.limit); // api limit
//     console.log(result.remaining) // api request remaining
//     return result;
// }, function(err){
//     console.log(err); // error info
// });

// console.log('result',result);











//
// instagramAPI.mediaSearch({lat:100, lng:100, distance:100000000}).then(Meteor.bindEnvironment(function(result) {
//       // console.log(result.data); // user info
//       // console.log(result.limit); // api limit
//       // console.log(result.remaining) // api request remaining
//       console.log('result',result);
//
//       // result.data.map(function(media){
//       //   media._id = media.id;
//       //   Instagram.upsert({_id:media._id},{$set:media});
//       // })
//   }, function(err){
//       console.log(err); // error info
//   }));

//get by tags

// var api = require('instagram-node').instagram();
//
// api.use({
//   client_id: '106ddbab307347bd9af6b1e2749930e2',
//   client_secret: 'dd2a4d00e75543d6b40a22e0cb157980'
// });
// api.use({ access_token: '1565140394.106ddba.0c2920998531475e8b3df6c09b0d1149' });
// api.tag_media_recent('ejuice', Meteor.bindEnvironment(function(err, medias, pagination, remaining, limit) {
//   if(err){
//     console.log('err', err);
//   }
//   else{
//     let length = medias.length;
//     let min_id = medias[length-1].id;
//     medias.map(function(media){
//       media._id = media.id;
//       Instagram.upsert({_id:media._id},{$set:media});
//     })
//   }
// }));
