import { Schema } from 'mongoose'

const CattleSchema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String },
    img: { type: [String] },
    dob: { type: String, required: true },
    price: { type: Number },
    entryDate: { type: String },
    pregnency: {
      date: { type: String },
      semen: { title: { type: String }, dose: { type: Number } },
      status: { type: Number, default: 0 }, //0=fail, 1=success, 2=pass 1st, 3=pass 2ืnd, 4=idles
      history: [
        {
          date: { type: String },
          semen: { type: String },
          status: { type: Number }, //0=fail, 1=success
        },
      ],
    },
    sire: { type: String },
    dam: { type: String },
  },
  { timestamps: true }
)
export default CattleSchema
