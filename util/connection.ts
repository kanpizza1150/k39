import mongoose, { Model } from 'mongoose'
import OrderSchema from '../model/Order'
import ProductSchema from '../model/Product'
import SemenSchema from '../model/Semen'

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URL } = process.env

// connection function
export const dbConnect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URL as string)
    .catch((err) => console.log(err))
  console.log('===Mongoose Connection Established===')

  const Product =
    mongoose.models.Product || mongoose.model('Product', ProductSchema)

  const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)
  const Semen = mongoose.models.Semen || mongoose.model('Semen', SemenSchema)

  return { conn, Product, Order, Semen }
}
