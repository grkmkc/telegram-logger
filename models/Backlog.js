const mongoose = require('mongoose');
const { Schema } = mongoose;

const backlogSchema = new Schema({
  user: {
    name: String,
    avatar: String
  },
  priority: String,
  date: Date,
  tags: [],
  issue: String,
  name: String
});

mongoose.model('backlogs', backlogSchema);
