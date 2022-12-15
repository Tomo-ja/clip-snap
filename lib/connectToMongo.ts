import mongoose from "mongoose"

const connectToMongo = async () => mongoose.connect(process.env.MONGO_URL!)

export default connectToMongo