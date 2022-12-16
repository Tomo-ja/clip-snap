import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

export default async function addTag(req: NextApiRequest, res: NextApiResponse<any>){
	try{
		await connectToMongo()
		const user = await User.findById(req.body.data.userId)

		if(!user) {
			return res.json({success: false, message: 'User not found'})
		}

		user.tags.push(req.body.data.name)

		await user.save()
		res.json({success: true, message: 'Add tag to user'})

	} catch (error) {
		res.json({ error })
	}
}