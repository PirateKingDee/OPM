import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { AffiliateList } from '/imports/api/affiliate/affiliate.js';
import { Products } from '/imports/api/products/products.js';
import AllShopsPage from '/imports/ui/pages/AllShopsPage.jsx';
export default createContainer((props) =>{
  let allUser = Meteor.users.find({favorited_number: { $exists: true, $nin: [0]}} ).fetch();

  return {
    allUser: allUser
  }
}, AllShopsPage);
