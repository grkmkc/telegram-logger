const mongoose = require('mongoose');
const { Schema } = mongoose;

const backlogSchema = new Schema({
  name: String,
  description: String
});

mongoose.model('backlogs', backlogSchema);
