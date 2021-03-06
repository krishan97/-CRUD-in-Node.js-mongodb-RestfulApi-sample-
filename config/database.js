module.exports = function(app) {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/sample', function(err, res) {
    if (err) {
      console.log(err);
    } else {
      require('./../models/index.js')(mongoose);
      require('./../routes/index.js')(app);
    }
  });
};
