var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taskdb');


var TaskSchema = mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    description: {type: String, required: true},
}, {timestamps: true });

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
