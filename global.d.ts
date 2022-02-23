import { Connection } from 'mongoose'

declare namespace NodeJS {
  interface Global {
    mongoose: Connection
  }
}
declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: Record<string, any> | stirng | number
  }
}
