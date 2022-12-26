import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Folder from "../../../models/folder"


export default async function create(req: NextApiRequest, res: NextApiResponse<any>) {
	try{
		await connectToMongo()

		const folderInfo = {
			name: req.body.data.name,
			description: req.body.data.description,
			belongsTo: req.body.data.userId
		}

		const newFolder = await Folder.create(folderInfo)

		res.json({ success: true, message: 'successfully created new folder', folder: newFolder })

	} catch (error) {
		res.json({ error })
	}
}