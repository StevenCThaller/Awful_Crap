var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Task = require('../models/task');
// mongoose.Promise = global.Promise;

module.exports = {
    home: (req, res) => {
        res.redirect('/show/all')
    },
    showall: (req, res) => {
        Task.find()
            .then(alltasks => res.json(alltasks))
            .catch(err => res.json(err));
    },
    displayone: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(displayed => res.json(displayed))
            .catch(err => res.json(err));
    },
    createnew: (req, res) => {
        console.log(req.body);
        Task.create({title: req.body.title, description: req.body.description})
            .then(newTask => res.json(newTask))
            .catch(err => res.json(err));
    },
    updatetask: (req, res) => {
        // console.log(`ID: --> ${req.params.id}`)
        var opts = { runValidator: 1 }
        Task.findByIdAndUpdate(req.params.id, req.body, opts)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Task.findOneAndRemove({_id: req.params.id})
            .then(deletedTask => res.json(deletedTask))
            .catch(err => res.json(err));
    },
}