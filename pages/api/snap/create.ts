import type { NextApiRequest, NextApiResponse } from "next"
import connectToMongo from "../../../lib/connectToMongo"
import Snap from "../../../models/snap"


export default async function create(req: NextApiRequest, res: NextApiResponse<any>) {
	try{
		await connectToMongo()

		console.log(req.body.data)

		const snapInfo = {
			title: req.body.data.title,
			tags: req.body.data.tags,
			description: req.body.data.description,
			references: req.body.data.references || [],
			belongsTo: req.body.data.folderId,
			createdBy: req.body.data.userId,
			template: req.body.data.code
		}

		const newSnap = await Snap.create(snapInfo)

		res.json({ success: true, message: 'successfully created new folder', snap: newSnap })

	} catch (error) {
		res.json({ error })
	}
}