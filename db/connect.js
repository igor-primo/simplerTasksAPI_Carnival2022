const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_CERTIFICATES;

mongoose.connect(connectionString)
	.then(_=>console.log('connect to db'))
	.catch(err => console.log(err));
