function getAllTasks(req, res) {

	/*
	 	#swagger.tags = ['Getters']
	 */

	res.json({msg: 'all items'});

}

function createTask(req, res){

	/*
	 	#swagger.tags = ['Posters']
	 */

	res.send('create task');

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
