export default function userLogin(state = null, action = {}) {
  switch (action.type) {
    case 'SET_LOGIN_USER':
      return action.user;
    default:
      return state;
  }
}
