import { Schema, model, models } from "mongoose";

const SnapSchema = new Schema({
	title: String,
	tags: [String],
	description: String,
	references: {
		type: [String],
		default: []
	},
	belongsTo: {
		type: Schema.Types.ObjectId, 
		immutable: true,
		required: true,
		ref: 'Folder',
		select: false

	},
	createdBy: {
		type: Schema.Types.ObjectId,
		immutable: true,
		required: true,
		ref: 'User',
		select: false
},
	template: {
		type: [{
			content: String,
			suffix: String,
			variables: [{
				name: String,
				value: String
			}]
		}],
		default: []
	},
},
{
	timestamps: true
}
)

const Snap = models.Snap || model("Snap", SnapSchema)

export default Snap