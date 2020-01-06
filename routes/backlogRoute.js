const mongoose = require('mongoose');
const Backlog = mongoose.model('backlogs');
const constants = require('../constants');
const colors = constants.colors;

module.exports = app => {
  app.get(`/api/backlog`, async (req, res) => {
    let backlogs = await Backlog.find();
    return res.status(200).send(backlogs);
  });

  function editBacklog(body) {
    let val;
    for (let [key, value] of Object.entries(colors)) {
      console.log(body.tags);
      if (key.toLowerCase() === body.tags) {
        val = value;
        /* console.log(backlog.tags); */
      }
    }
    return val;
  }

  app.post(`/api/backlog`, async (req, res) => {
    let tags = await editBacklog(req.body);
    req.body.tags = {
      name: tags.name,
      metaData: {
        color: tags.metaData.color
      }
    };
    let backlog = await Backlog.create(req.body);
    return res.status(201).send({
      error: false,
      backlog
    });
  });

  app.put(`/api/backlog/:id`, async (req, res) => {
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
  });
};
