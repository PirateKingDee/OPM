export default function yelpSearchTerm(state = null, action = {}) {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.searchTerm;
    default:
      return state;
  }
}
