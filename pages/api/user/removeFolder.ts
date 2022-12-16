import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

export default async function removeFolderId(req: NextApiRequest, res: NextApiResponse<any>){

	try{
		await connectToMongo()
		const user = await User.findById(req.body.data.userId)

		if(!user) {
			return res.json({success: false, message: 'User not found'})
		}

		user.folders = user.folders.filter((id: any) => id.toString() !== req.body.data.folderId)
		await user.save()
		res.json({success: true, message: 'Remove folder id'})

	} catch (error) {
		res.json({ error })
	}

}