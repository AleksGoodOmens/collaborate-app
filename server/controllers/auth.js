import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jsonWebToken from 'jsonwebtoken';

dotenv.config();
// Register user
export const register = async (req, res) => {
	try {
		const { username, password } = req.body;
		console.log(username);
		const isUsed = await User.findOne({ username });
		if (isUsed) {
			return res.json({
				message: 'this username already in use',
			});
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username,
			password: hash,
		});

		await newUser.save();

		const token = jsonWebToken.sign(
			{
				id: newUser._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		);

		// response
		return res.json({ newUser, token, message: 'Registration success' });
	} catch (error) {
		return res.json({
			message: 'Registration failed try again',
		});
	}
};
// login user
export const login = async (req, res) => {
	try {
		/**take username and password from request body frontend */
		const { username, password } = req.body;
		/**try find the same user at Database */
		const user = await User.findOne({ username });

		if (!user) {
			return res.json({
				message: 'This username is not registered yet',
			});
		}

		/**checking password using bcrypt.compare(password from frontend will be compare with password from database) */
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.json({
				message: 'password is incorrect',
			});
		}

		const token = jsonWebToken.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		);

		return res.json({ token, user, message: 'welcome' });
	} catch (error) {
		return res.json({
			message: 'Login failed try again',
		});
	}
};
// Get me
export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		if (!user) {
			return res.status(200).json({
				message: 'This username is not registered yet',
			});
		}

		const token = jsonWebToken.sign(
			{
				id: user._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '30d' }
		);
		res.json({ user, token });
	} catch (error) {}
};
