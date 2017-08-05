export default function favoriteList(state = new Set(), action = {}) {
  switch (action.type) {
    case 'SET_FAVORITE_LIST':
      return action.list;
    default:
      return state;
  }
}
