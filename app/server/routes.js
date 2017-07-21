const Home = require('./controllers/home');
const Board = require('./controllers/board');
const preview = require("page-previewer");
const parser = require('rss-parser');
const MongoClient = require('mongodb').MongoClient;

const feeds = [
  "http://severemma.com/feed/",
  "http://www.ufc.com/rss/news",
  "http://www.mmafighting.com/rss/current",
  "http://www.sherdog.com/rss/news2.xml"
];

const get = (url) => {
  const deferred = new Promise((resolve, reject) => {
    preview(url, function(err, data) {
      if(!err) {
        resolve(data)
      }
    });
  });
  return deferred;
}

const getAll = (feeds) => {
  let requests = [];
  let results = [];

  feeds.forEach((feed) => {
    requests.push(get(feed.link));
  });

  // Create a new promise to return to the caller
  const deferred = new Promise((resolve, reject) => {
    // Once every erpisode has come back concatenate them into a single array
    Promise.all(requests).then((response) => {
      resolve({response: response});
    }, (err) => {
      reject(err);
    });
  });

  return deferred;
}

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    const controller = new Home(app);
    return controller.main(req, res, next);
  });

  app.get('/rss', (req, res, next) => {
    parser.parseURL(feeds[2], function(err, parsed) {
      getAll(parsed.feed.entries)
        .then((data) => {
          res.send(data.response);
        })
    })
  });

  // heartbeat route
  app.get('/status', (req, res) => res.send({status: 'ok'}));

  // wildcard for 404 handling
  app.get('*', (req, res, next) => {
    next(new Error(404));
  });

};
