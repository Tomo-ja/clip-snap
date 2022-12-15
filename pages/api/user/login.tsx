import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

const bcrypt = require("bcrypt");

export default async function login(req: NextApiRequest, res: NextApiResponse<any>) {

	try{
		await connectToMongo()
		const user = await User.findOne({ email: req.body.data.email })

		if (!user) {
			return res.json({success: false, message: 'Authentication failed. User not found.'})
		}

		const doesPasswordMatch = await bcrypt.compare(req.body.data.password, user.password)

		if (!doesPasswordMatch) {
			return res.json({success: false, message: 'Authentication failed. Wrong password.'})
		}

		return res.json ({
			success: true,
			id: user._id.toString(),
			name: user.name,
			tags: user.tags || [],
			folders: user.folders || []
		})

	} catch (error) {
		res.json({ error })
	}
}