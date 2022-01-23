import { Schema } from 'mongoose'

const SemenSchema = new Schema(
  {
    title: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    leaveAt: { type: String, required: true },
    buyFrom: { type: String },
    img: { type: String },
    type: { type: Number, required: true }, //0=รวมเพศ, 1=แยกเพศ
  },
  { timestamps: true }
)
export default SemenSchema
