const Task = require('../models/Task');

function getAllTasks(req, res) {

	/*
	 	#swagger.tags = ['Getters']
	 */

	res.json({msg: 'all items'});

}

async function createTask(req, res){

	/*
	 	#swagger.tags = ['Posters']
	 */

	const task = await Task.create(req.body);
	res.status(201).json({task});

}

function getTask(req, res){

	/*
	 	#swagger.tags = ['Getters']
	 */

	res.send('get single task');

}

function updateTask(req, res){

	/*
	 	#swagger.tags = ['Posters']
	 */

	res.send('update task');

}

function deleteTask(req, res){

	/*
	 	#swagger.tags = ['Putters']
	 */

	res.send('delete task');

}




module.exports = { 

	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,

};
