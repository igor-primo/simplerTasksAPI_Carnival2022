const mongoose = require('mongoose');

const schemaForTask = new mongoose.Schema({

	//validation

	name: {
		type: String,
		required: [true, 'Nome deve ser provido'],
		trim: true,
		maxlength: [20, 'Nome não pode ter mais do que 20 caracteres'],
	},
	completed: {
		type: Boolean,
		default: false,
	}

});

module.exports = mongoose.model('Task', schemaForTask);
