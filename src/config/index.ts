import * as dotenv from 'dotenv'

dotenv.config()

import PRODUCTION from './environments/pro'
import DEVELOPMENT from './environments/dev'
import TEST from './environments/test'

const { NODE_ENV } = process.env

export type Configuration = {
  NODE_ENV: string
  PORT: number
  JWT_SECRET: string
  JWT_TOKEN_EXPIRATION: string
  RD_PARTY_URL: string
  RD_PARTY_TOKEN: string
}

let currentConfig: Configuration = DEVELOPMENT

switch (NODE_ENV) {
  case 'production':
    currentConfig = PRODUCTION
    break
  case 'test':
    currentConfig = TEST
    break
  default:
    currentConfig = DEVELOPMENT
}

export { currentConfig as config }
