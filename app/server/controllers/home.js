var path = require('path');

class Home {

  /**
  * Our constructor will pull in the app object
  * @param {object} application
  * @return void
  */
  constructor(app) {
    this.app = app;
  }

  /**
     * Main entry point into the controller
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @return {object} response - the response object.
    */
  main(req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
  }

}


module.exports = Home;
