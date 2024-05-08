import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js'; // .js is important

const app = express();
dotenv.config();

//! Constants
const PORT = process.env.PORT || 5000; // port for browser
const DB_USER = process.env.DB_USER; // user was registered on https://cloud.mongodb.com/v2/661a4535435bbd5ea34aca79#/security/database/users
const DB_PASSWORD = process.env.DB_PASSWORD; // was registered on https://cloud.mongodb.com/v2/661a4535435bbd5ea34aca79#/security/database/users
const DB_NAME = process.env.DB_NAME; // optional

const DB_LINK = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mymango.59mdoos.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=myMango`; // link https://cloud.mongodb.com/v2/661a4535435bbd5ea34aca79#/

// Middleware functions updated our express
app.use(cors()); // telling to server that we alow use any ip address to make requests to DB
app.use(express.json()); // telling to server that all requests will be in JSON format

//* auth routes
app.use('/api/auth', authRoute);

async function init() {
	try {
		await mongoose.connect(DB_LINK);
		console.log('DB is On');

		app.listen(PORT, () => {
			console.log(`Server Started on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

init();
