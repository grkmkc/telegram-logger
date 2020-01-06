const mongoose = require('mongoose');
const Backlog = mongoose.model('backlogs');

module.exports = app => {
  app.get(`/api/backlog`, async (req, res) => {
    let backlogs = await Backlog.find();
    return res.status(200).send(backlogs);
  });

  app.post(`/api/backlog`, async (req, res) => {
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
