import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

export default async function show(req: NextApiRequest, res: NextApiResponse<any>) {

	try{
		await connectToMongo()
		const user = await User.findById(req.body.id)

		if(!user) {
			return res.json({success: false, message: 'User not found'})
		}

		return res.json({
			success: true,
			name: user.name,
			folderIds: user.folders || [],
			tags: user.tags || [],
		})
	} catch (error) {
		res.json({ error })
	}
}