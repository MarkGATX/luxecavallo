const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-luxecavallo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


module.exports = mongoose.connection;