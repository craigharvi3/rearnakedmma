var alertify = require('alertifyjs');

const defaultState = {
  appName: 'RearNakedMMA',
  news: []
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, news: action.payload.news };
    default:
      return state;
  }
};

export { reducer };
