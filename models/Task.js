const mongoose = require('mongoose');

const schemaForTask = new mongoose.Schema({

	name: String,
	completed: Boolean

});

module.exports = mongoose.model('Task', schemaForTask);
