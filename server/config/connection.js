const mongoose = require('mongoose');

console.log(`REACT_APP_MONGODB_URI: ${process.env.REACT_APP_MONGODB_URI}`);

mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-luxecavallo',
  process.env.REACT_APP_MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mern-luxecavallo'
  }
)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(`MongoDB connection error: ${err.message}`));;


module.exports = mongoose.connection;