export default function loginModal(state = false, action = {}) {
  switch (action.type) {
    case 'SET_LOGIN_MODAL':
      return action.show;
    default:
      return state;
  }
}
