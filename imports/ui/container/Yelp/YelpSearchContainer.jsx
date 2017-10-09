import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import  YelpPage  from '/imports/ui/pages/Yelp/YelpPage.jsx';
import { Yelps } from '/imports/api/yelp/yelps.js';
import {Products} from '/imports/api/products/products.js';
export default createContainer((props) =>{
  // let term = props.params.term;
  // let location = props.params.location;
  // console.log('term and location', term," ",location);
  let yelpSub = Meteor.subscribe('search');
  const places = Yelps.find({}).fetch();
  console.log('places', places);
  return {
    places: places,
    loading: !yelpSub.ready()
  };
}, YelpPage);
