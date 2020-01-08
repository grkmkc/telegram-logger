const mongoose = require('mongoose');
const Backlog = mongoose.model('backlogs');
const telegram = require('telegram-bot-api');
require('dotenv').config();

const api = new telegram({
  token: process.env.BOT_TOKEN,
  updates: {
    enabled: true
  }
});

/* api.on('message', function(message) {
  // Received text message
  console.log(message);
}); */

/* api.on('inline.query', function(message) {
  // Received inline query
  console.log(message);
});

api.on('inline.result', function(message) {
  // Received chosen inline result
  console.log(message);
});
 */
/* api.on('inline.callback.query', function(message) {
  // New incoming callback query
  console.log(message);
}); */

/* api.on('edited.message', function(message) {
  // Message that was edited
  console.log(message);
});
 */
api.on('update', function(message) {
  // Generic update object
  // Subscribe on it in case if you want to handle all possible
  // event types in one callback
  if (message.message.text.includes('/issue')) {
    let user = message.message.chat.first_name;
    let issue = message.message.text.substring(6);
    let chat_id = message.message.chat.id;
    let user_id = message.message.from.id;
    let obj = {
      name: `Telegram logged by ${user}`,
      user: {
        name: user
      },
      issue: issue,
      tags: [
        {
          name: 'telegram',
          metaData: {
            color: '#0088CC'
          }
        }
      ]
    };
    console.log(obj, 'object');
    let backlog = Backlog.create(obj);
    api
      .sendMessage({
        chat_id: chat_id,
        text: 'Thanks! Your issue has been logged... <3'
      })
      .then(function(data) {
        console.log(util.inspect(data, false, null));
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
