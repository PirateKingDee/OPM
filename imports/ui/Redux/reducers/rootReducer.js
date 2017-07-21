import { combineReducers } from 'redux';
import loginModal from '/imports/ui/Redux/reducers/Login/loginModal.js';
import loginUser from '/imports/ui/Redux/reducers/Login/loginUser.js';
import curPage from '/imports/ui/Redux/reducers/Login/curPage.js';
const rootReducer = combineReducers({
  loginModal,
  loginUser,
  curPage
});

export default rootReducer;
