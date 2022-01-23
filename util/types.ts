export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export enum EnumResponseStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export type ISetState = React.Dispatch<React.SetStateAction<any>>
export interface IPageProps {
  header: {
    title: string
  }
}

export interface IPizzaOption {
  text: string
  price: number
}

export interface IPizza {
  _id: string
  title: string
  desc: string
  img: string
  prices: Array<number>
  extraOptions: Array<IPizzaOption>
}

export interface IOrder {
  _id: string
  customer: string
  address: string
  total: number
  status: 0 | 1 | 2 | 3
  method: 0 | 1 | 2 | 3
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
