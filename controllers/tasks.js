const Task = require('../models/Task');

async function getAllTasks(req, res) {

	/*
	 	#swagger.tags = ['Getters']
	 */

	try{

		const tasks = await Task.find({});
		return res.status(200).json({tasks});

	} catch(err){

		return res.status(500)
			.json({msg: err});
		
	}

}

async function createTask(req, res){

	/*
	 	#swagger.tags = ['Posters']
	 */

	try{

		const task = await Task.create(req.body);
		return res.status(201).json({task});
		
	} catch (err){

		return res.status(500)
			.json({msg: err});

	}

}

async function getTask(req, res){

	/*
	 	#swagger.tags = ['Getters']
	 */

	try{

		const {id: taskId} = req.params;
		const task = await Task.findOne({_id: taskId});

		if(!task){

			return res.status(404)
				.json({msg: 'Nenhuma tarefa com essa id'});

		}

		return res.status(200)
			.json({task});

	} catch (err) {
		
		return res.status(500).json({msg: err});

	}

}

async function updateTask(req, res){

	/*
	 	#swagger.tags = ['Posters']
	 */

	try{

		const {id: taskId} = req.params;
		const task = await Task.findOneAndUpdate({_id: taskId}, req.body,
			{
				new:true,
				runValidators: true
			});

		if(!task){

			return res.status(404)
				.json({msg: 'Nenhuma tarefa com essa id'});

		}

		return res.status(200).json({id:taskId, data:req.body});

	} catch (err){

		return res.status(500).json({msg: err});

	}

}

async function deleteTask(req, res){

	/*
	 	#swagger.tags = ['Putters']
	 */

	try{

		const {id: taskId} = req.params;
		const task = await Task.findOneAndDelete({_id: taskId});

		if(!task){

			return res.status(404)
				.json({msg: 'Nenhuma tarefa com essa id'});

		}

		return res.status(200)
			.json({task});

	} catch(err){

		return res.status(500)
			.json({msg: err});

	}

}

module.exports = { 

	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,

};
