export default function curPage(state = "home", action = {}) {
  switch (action.type) {
    case 'SET_PAGE':
      return action.page;
    default:
      return state;
  }
}
