const mongoose = require('mongoose');
const Note = mongoose.model('notes');
const constants = require('../constants');
const colors = constants.colors;

module.exports = app => {
  app.get(`/api/note`, async (req, res) => {
    let notes = await Note.find();
    return res.status(200).send(notes);
  });

  function editNote(tag) {
    let val;
    for (let [key, value] of Object.entries(colors)) {
      if (key.toLowerCase() === tag) {
        val = value;
        /* console.log(backlog.tags); */
      }
    }
    return val;
  }

  app.post(`/api/note`, async (req, res) => {
    let tags = [];
    req.body.tags.map(tag => {
      tags.push(editNote(tag));
    });
    req.body.tags = tags;
    let note = await Note.create(req.body);
    return res.status(201).send({
      error: false,
      note
    });
  });

  /* app.put(`/api/backlog/:id`, async (req, res) => {
    const { id } = req.params;

    let backlog = await Backlog.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      backlog
    });
  });

  app.delete(`/api/backlog/:id`, async (req, res) => {
    const { id } = req.params;

    backlog = await Backlog.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      backlog
    });
  }); */
};
