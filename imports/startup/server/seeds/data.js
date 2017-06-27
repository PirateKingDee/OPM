import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

let data = [{
  name: 'Hancock',
  image: 'http://s.pacn.ws/640/9t/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-176768.6.jpg?oek1cs',
  price: 20.99,
  rating: 5,
  shipping: 5
},
{
  name: 'Kuma',
  image: 'http://s.pacn.ws/640/93/pa.163705.3.jpg?o32ibw',
  price: 20.99,
  rating: 3,
  shipping: 5
},
{
  name: 'Luffy',
  image: 'http://s.pacn.ws/640/s5/one-piece-excellent-model-portrait-of-pirates-sailing-again-18-s-506901.1.jpg?ojnkch',
  price: 39.99,
  rating: 4,
  shipping: 5
},
{
  name: 'Mr0',
  image: 'http://s.pacn.ws/640/9q/pa.175440.4.jpg?o3rrrj',
  price: 15.99,
  rating: 5,
  shipping: 5
},
{
  name: 'Rayleigh',
  image: 'http://s.pacn.ws/640/az/excellent-model-one-piece-neo-dx-portraits-of-pirates-18-scale-p-197579.7.jpg?oek0m3',
  price: 20.99,
  rating: 2,
  shipping: 5
},
{
  name: 'Robin',
  image: 'http://s.pacn.ws/640/cd/excellent-model-one-piece-sailing-again-18-scale-prepainted-pvc-222571.5.jpg?oejzgg',
  price: 27.99,
  rating: 1,
  shipping: 5
},
{
  name: 'Sabo',
  image: 'http://s.pacn.ws/640/mm/excellent-model-one-piece-portrait-of-pirates-sailing-again-sabo-407039.1.jpg?o2s7ry',
  price: 38.99,
  rating: 4,
  shipping: 5
},
{
  name: 'Solo',
  image: 'http://s.pacn.ws/640/bf/pa.205821.2.jpg?o3fncg',
  price: 30.99,
  rating: 5,
  shipping: 5
},
{
  name: 'WhiteBeard',
  image: 'http://s.pacn.ws/640/gk/excellent-model-one-piece-portraits-of-pirates-non-scale-neoex-p-298303.10.jpg?oei5ce',
  price: 21.99,
  rating: 4,
  shipping: 6
}
]

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
  Products.upsert(selector, {$set: data[i]});
}
