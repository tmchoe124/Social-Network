const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () =>
  console.log('Mongoose connected to the database')
);

mongoose.connection.on('error', (err) =>
  console.error('Mongoose connection error:', err)
);

module.exports = mongoose.connection;