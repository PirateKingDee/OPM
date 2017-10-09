import { combineReducers } from 'redux';
import loginModal from '/imports/ui/Redux/reducers/Login/loginModal.js';
import loginUser from '/imports/ui/Redux/reducers/Login/loginUser.js';
import curPage from '/imports/ui/Redux/reducers/Login/curPage.js';
import favoriteList from '/imports/ui/Redux/reducers/FavoriteList/favoriteList.js';
import yelpSearchTerm from '/imports/ui/Redux/reducers/YelpSearchTerms/yelpSearchTerm.js';
const rootReducer = combineReducers({
  loginModal,
  loginUser,
  curPage,
  favoriteList,
  yelpSearchTerm,
});

export default rootReducer;
