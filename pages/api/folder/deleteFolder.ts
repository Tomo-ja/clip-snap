import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Folder from "../../../models/folder"

export default async function deleteFolder(req: NextApiRequest, res: NextApiResponse<any>){

	try{
		await connectToMongo()
		const id = req.body.data.folderId
		const response = await Folder.deleteOne({_id: id})
		if ( !response.acknowledged ) {
			return res.json({success: false, message: 'failed to delete folder'})
		}

		return res.json({success: true, message: 'successfully delete folder', folderId: id})
	} catch (error) {
		res.json({ error })
	}
	
}