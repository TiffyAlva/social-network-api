const { connect, connection } = require('mongoose');

connect('mongodb://0.0.0.0:27017/socialNetworkDbsl', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
