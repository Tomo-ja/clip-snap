import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Snap from "../../../models/snap"

export default async function deleteFolder(req: NextApiRequest, res: NextApiResponse<any>){

	try{

		await connectToMongo()

		const id = req.body.data.snapId
		const response = await Snap.deleteOne({_id: id})
		if ( !response.acknowledged ) {
			return res.json({success: false, message: 'failed to delete snap'})
		}

		return res.json({success: true, message: 'successfully delete snap', snapId: id})
		
	} catch (error) {
		res.json({ error })
	}
	
}