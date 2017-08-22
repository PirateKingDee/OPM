
Meteor.methods({
  getInstagram: function(){
    var api = require('instagram-node').instagram();
    api.use({
      client_id: '106ddbab307347bd9af6b1e2749930e2',
      client_secret: 'dd2a4d00e75543d6b40a22e0cb157980'
    });
    api.use({ access_token: '1565140394.106ddba.0c2920998531475e8b3df6c09b0d1149' });
    // api.tag('vape', function(err, result, remaining, limit) {});
    // console.log('api',api);

    api.user('1565140394', function(err, result, remaining, limit) {
      if(err){
        console.log(err);
      }
      else{
        console.log('result',result);
      }
    });
    api.user_media_recent('1565140394', function(err, medias, pagination, remaining, limit) {
      if(err){
        console.log('medias err', err);
      }
      else{
        // console.log('medias',medias);
      }
    });

    api.media('1583631641406836808_1565140394', function(err, media, remaining, limit) {
      if(err){
        console.log('media err', err);
      }
      else{
        console.log('media', media);
      }
    });


    // return ig;
  },
})
