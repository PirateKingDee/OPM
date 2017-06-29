import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';
// import { Reviews } from '/imports/api/review/reviews.js';

let data = [{
  name: 'Hancock',
  image: 'http://s.pacn.ws/640/9t/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-176768.6.jpg?oek1cs',
  price: 20.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Kuma',
  image: 'http://s.pacn.ws/640/93/pa.163705.3.jpg?o32ibw',
  price: 20.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Luffy',
  image: 'http://s.pacn.ws/640/s5/one-piece-excellent-model-portrait-of-pirates-sailing-again-18-s-506901.1.jpg?ojnkch',
  price: 39.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Mr0',
  image: 'http://s.pacn.ws/640/9q/pa.175440.4.jpg?o3rrrj',
  price: 15.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Rayleigh',
  image: 'http://s.pacn.ws/640/az/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-197579.7.jpg?oek0m3',
  price: 20.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Robin',
  image: 'http://s.pacn.ws/640/cd/excellent-model-one-piece-sailing-again-18-scale-prepainted-pvc-222571.5.jpg?oejzgg',
  price: 27.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Sabo',
  image: 'http://s.pacn.ws/640/mm/excellent-model-one-piece-portrait-of-pirates-sailing-again-sabo-407039.1.jpg?o2s7ry',
  price: 38.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'Zoro',
  image: 'http://s.pacn.ws/640/bf/pa.205821.2.jpg?o3fncg',
  price: 30.99,
  shipping: 5,
  date: new Date(),
  rating: 1,
  total_rating: 0
},
{
  name: 'WhiteBeard',
  image: 'http://s.pacn.ws/640/gk/excellent-model-one-piece-portraits-of-pirates-non-scale-neoex-p-298303.10.jpg?oei5ce',
  price: 21.99,
  shipping: 6,
  date: new Date(),
  rating: 1,
  total_rating: 0
}
]


for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}

// var [{
//   id:"11",
//   review: "i like it",
//   user_id: "andrew",
//   product_id: "sdf",
//   product_name: "mango"
// },
// {
//   id: "22"
//   review: "ok",
//   user_id: "heather",
//   product_id: "sdf",
//   product_name: "mango"
// }]
//
// var reviewData = {
//   _id: "22",
//   review: "ok",
//   user_id: "heather",
//   product_id: "sdf",
//   product_name: "mango"
// }
// Reviews.inser(reviewData);
