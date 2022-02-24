require('./db/connect');
const express = require('express');
const main = express();
const tasks = require('./routes/tasks');

// midllewares

main.use(express.json());

main.use('/api/v1/tasks', tasks);


const port = process.env.PORT || 5000;

main.listen(port, _=>{
	console.log(`listening on ${port}`);
});
