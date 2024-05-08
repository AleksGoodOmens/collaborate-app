import mongoose from 'mongoose';

/** Creating Schema for user
 * Object with username, password, posts
 * inside each we should give types of data and some options
 * such as require and unique
 */

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		cart: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Cart', // link to another schemas
			},
		],
	},
	{ timestamps: true }
);
export default mongoose.model('User', UserSchema);
