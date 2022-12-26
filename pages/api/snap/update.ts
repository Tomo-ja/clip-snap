import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Snap from "../../../models/snap"

export default async function update(req: NextApiRequest, res: NextApiResponse<any>){

	try{
		await connectToMongo()
		console.log(req.body.data)
		const snap = await Snap.findById(req.body.data.snapId)

		if(!snap) {
			return res.json({success: false, message: 'Snap not found'})
		}

		snap.title = req.body.data.title || snap.title
		snap.tags = req.body.data.tags || snap.tags
		snap.description = req.body.data.description || snap.description
		snap.references = req.body.data.references || snap.references
		snap.template = req.body.data.code || snap.template

		await snap.save()
		res.json({success: true, message: 'Update Snap details'})

	} catch (error) {
		res.json({ error })
	}
}