const mongoose = require('mongoose');
const { Schema } = mongoose;

const backlogSchema = new Schema({
  user: String,
  priority: String,
  date: Date,
  tags: {
    name: String,
    metaData: {
      color: String
    }
  },
  issue: String,
  name: String
});

mongoose.model('backlogs', backlogSchema);
