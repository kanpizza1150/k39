import { Schema } from 'mongoose'

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    prices: { type: [Number], required: true },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
)
export default ProductSchema
