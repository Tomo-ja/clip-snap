import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

export default async function addFolderId(req: NextApiRequest, res: NextApiResponse<any>){
	try{
		await connectToMongo()
		const user = await User.findById(req.body.data.userId)
		console.log('user fetched', user)

		if(!user) {
			return res.json({success: false, message: 'User not found'})
		}

		user.folders.push(req.body.data.folderId)

		console.log('new folder', user.folders)
		await user.save()
		res.json({success: true, message: 'Add folder id'})

	} catch (error) {
		res.json({ error })
	}
}