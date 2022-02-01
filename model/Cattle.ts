import { Schema } from 'mongoose'

const CattleSchema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String },
    img: { type: [String] },
    dob: { type: String, required: true },
    price: { type: Number },
    entryDate: { type: String },
    pregnancy: {
      date: { type: String },
      semen: { title: { type: String }, dose: { type: Number } },
      status: { type: Number, default: 4 }, //0=fail, 1=success, 2=pass 1st, 3=pass 2ืnd, 4=idle, 5=inprogress
      history: [
        {
          date: { type: String },
          semen: { title: { type: String }, dose: { type: Number } },
          status: { type: Number, default: 4 }, //0=fail, 1=success, 2=pass 1st, 3=pass 2ืnd, 4=idle, 5=inprogress
          firstCheckDate: { type: String },
          secondCheckDate: { type: String },
          dueDate: { type: String },
        },
      ],
    },
    sire: { type: String },
    dam: { type: String },
    rut: [String],
  },
  { timestamps: true }
)
export default CattleSchema
