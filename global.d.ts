import { Connection } from 'mongoose'

declare module NodeJS {
  interface Global {
    mongoose: Connection
  }
}
declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: Record<string, any> | stirng | number
  }
}
