const data = require('./dummy.json');
const AjaxPromise = require('ajax-promise');

const News = {
  all: () => {
    return new Promise((resolve, reject) => {
      resolve({news: data})
    });
  }
};

export default {
  News
};
