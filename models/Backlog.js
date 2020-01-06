const mongoose = require('mongoose');
const { Schema } = mongoose;

const backlogSchema = new Schema({
  user: String,
  priority: String,
  date: Date,
  tags: String,
  issue: String,
  name: String
});

mongoose.model('backlogs', backlogSchema);
