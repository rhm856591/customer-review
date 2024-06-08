import Mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await Mongoose.connect(process.env.DATABASE_URL).then(()=>console.log("Connected to DB")).catch((err)=>console.log(err));
  } catch (error) {
    console.log("error", error)
  }
}

export {connectToDb}