import { Schema, model, models } from "mongoose";

const FolderSchema = new Schema({
	name: {
		type: String,
		required: true,
		min: 1,
	},
	description: {
		type: String,
		required: true,
	},
	belongsTo: {
		type: Schema.Types.ObjectId, 
		ref: 'User',
		immutable: true,
		required: true,
	}
})

FolderSchema.virtual('snaps', {
	ref: 'Snap',
	localField: '_id',
	foreignField: 'belongsTo'
})

const Folder = models.Folder || model("Folder", FolderSchema)

export default Folder