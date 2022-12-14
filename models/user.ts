import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		min: 1,
	},
	email: {
		type: String,
		required: true,
		max: 50,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
		default: [],
	},
	folders: {
		type: [{type: Schema.Types.ObjectId, ref: 'Folder'}],
	}
})

const User = models.User || model("User", UserSchema)

export default User