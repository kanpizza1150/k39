import { NextApiRequest, NextApiResponse } from 'next'
import { IAxiosResponse } from './axios'
import { EnumPregnancyStatus } from './enums'

export interface ResponseFuncs {
  GET?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  POST?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  PUT?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  DELETE?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
}

export type ISetState = React.Dispatch<React.SetStateAction<any>>
export interface IPageProps {
  header: {
    title: string
  }
}

export interface ISemen {
  _id: string
  title: string
  stock: number
  price: number
  leaveAt: string
  buyFrom?: string
  img?: string
  type: 0 | 1 //0=รวมเพศ, 1=แยกเพศ
}
export interface ICattle {
  _id: string
  name: string
  nickname?: string
  img?: Array<string>
  dob?: string
  price?: string
  entryDate?: string
  pregnancy?: {
    date?: string
    semen?: { title: string; dose: number }
    status?: EnumPregnancyStatus
    history?: [
      {
        date: string
        semen: string
        status: EnumPregnancyStatus
      }
    ]
  }
  sire?: string
  dam?: string
  rut?: string[]
}

export interface ICattleListAxios extends Omit<IAxiosResponse, 'data'> {
  data: ICattle[]
}
export interface ICattleDetailAxios extends Omit<IAxiosResponse, 'data'> {
  data: ICattle
}
export interface ISemenDetailAxios extends Omit<IAxiosResponse, 'data'> {
  data: ISemen
}
export interface ISemenListAxios extends Omit<IAxiosResponse, 'data'> {
  data: ISemen[]
}
