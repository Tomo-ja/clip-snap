import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongo from "../../../lib/connectToMongo";
import User from "../../../models/user";

const bcrypt = require("bcrypt");

export default async function signUp(req: NextApiRequest, res: NextApiResponse<any>) {

	try{
		await connectToMongo()
		
		const hashedPassword = await bcrypt.hash(req.body.data.password, 10)

		const doesEmailExist = await User.findOne({ email: req.body.data.email })
		if (doesEmailExist) {
			return res.json({success: false, message: 'Email has registered already'})
		}

		const userInfo = {
			name: req.body.data.name,
			email: req.body.data.email,
			password: hashedPassword
		}

		const newUser = await User.create(userInfo)
		res.json({ success: true, message: 'successfully registered new user', user: newUser})
		
	} catch (error) {
		res.json({ error })
	}
}