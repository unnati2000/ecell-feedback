const mongoose = require('mongoose');
const FeedBackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model('feedback', FeedBackSchema);
