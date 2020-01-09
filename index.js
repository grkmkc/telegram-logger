const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Import models
require('./models/Backlog');
require('./models/Notes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/auto-kanban`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(bodyParser.json());

// Import Routes

require('./routes/backlogRoute')(app);
require('./routes/noteRoute')(app);

//Import Telegram API

require('./routes/telegram-api');

// Environment

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
