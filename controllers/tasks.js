const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCError} = require('../errors/custom');

const getAllTasks = asyncWrapper(async (req, res) => {

	const tasks = await Task.find({});
	return res.status(200).json({tasks});

});

const createTask = asyncWrapper( async (req, res) => {

	/*
	 	#swagger.tags = ['Posters']
	 */

	const task = await Task.create(req.body);
	return res.status(201).json({task});
		
});

const getTask = asyncWrapper(async (req, res) =>{

	/*
	 	#swagger.tags = ['Getters']
	 */

	const {id: taskId} = req.params;
	const task = await Task.findOne({_id: taskId});

	if(!task){
		
		return  next(customCError('Not Found', 404));

	}

	return res.status(200)
		.json({task});

});

const updateTask = asyncWrapper(async (req, res) =>{

	/*
	 	#swagger.tags = ['Posters']
	 */

	const {id: taskId} = req.params;
	const task = await Task.findOneAndUpdate({_id: taskId}, req.body,
		{
			new:true,
			runValidators: true
		});

	if(!task){

		return  next(customCError('Not Found', 404));

	}

	return res.status(200).json({id:taskId, data:req.body});

});

const deleteTask = asyncWrapper(async (req, res) => {

	/*
	 	#swagger.tags = ['Putters']
	 */

	const {id: taskId} = req.params;
	const task = await Task.findOneAndDelete({_id: taskId});

	if(!task){

		return  next(customCError('Not Found', 404));

	}

	return res.status(200)
		.json({task});

});

module.exports = { 

	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,

};
