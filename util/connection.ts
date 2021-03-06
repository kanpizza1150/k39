import mongoose from 'mongoose'
import CattleSchema from '../model/Cattle'
import SemenSchema from '../model/Semen'

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URL } = process.env

// connection function
export const dbConnect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URL as string)
    .catch((err) => console.log(err))

  const Semen = mongoose.models.Semen || mongoose.model('Semen', SemenSchema)
  const Cattle =
    mongoose.models.Cattle || mongoose.model('Cattle', CattleSchema)

  return { conn, Semen, Cattle }
}
