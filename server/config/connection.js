const mongoose = require('mongoose');

mongoose.connect(
  process.env.REACT_APP_MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-luxecavallo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mern-luxecavallo'
  }
);


module.exports = mongoose.connection;