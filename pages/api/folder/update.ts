import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Folder from "../../../models/folder"

export default async function update(req: NextApiRequest, res: NextApiResponse<any>){

	try{
		await connectToMongo()
		const folder = await Folder.findById(req.body.data.folderId)

		if(!folder) {
			return res.json({success: false, message: 'Folder not found'})
		}

		folder.name = req.body.data.name
		folder.description = req.body.data.description

		await folder.save()
		res.json({success: true, message: 'Update folder info'})

	} catch (error) {
		res.json({ error })
	}
}