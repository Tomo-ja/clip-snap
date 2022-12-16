import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

export default async function update(req: NextApiRequest, res: NextApiResponse<any>) {

	try{
		await connectToMongo()
		const user = await User.findById(req.body.data.userId)

		if(!user) {
			return res.json({success: false, message: 'User not found'})
		}

		user.name = req.body.data.name
		await user.save()

		return res.json({ success: true, message: 'update user name'})

	} catch (error) {
		res.json({ error })
	}
}