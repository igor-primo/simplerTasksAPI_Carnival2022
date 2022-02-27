const express = require('express');
const main = express();
const tasks = require('./routes/tasks');
const myConnect = require('./db/connect');

// midllewares

main.use(express.static('./public'));
main.use(express.json()); // does not work well with cURL
main.use(express.urlencoded({extended: true}));

// api

main.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 5000;

async function startServer(){

	try{
		await myConnect(); //returns promise
		main.listen(port, _=>{
			console.log(`listening on ${port}`);
		});
	} catch(error){
		console.log(error);
	}

}

startServer();
