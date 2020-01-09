const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  user: {
    name: String,
    avatar: String
  },
  date: Date,
  tags: [],
  content: String,
  name: String
});

mongoose.model('notes', noteSchema);
