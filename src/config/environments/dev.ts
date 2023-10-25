import { Configuration } from '../'

const DEV: Configuration = {
  NODE_ENV: 'development',
  PORT: +(process.env.PORT || 3000),
  JWT_SECRET: process.env.JWT_SECRET || '',
  JWT_TOKEN_EXPIRATION: process.env.JWT_TOKEN_EXPIRATION || '1d',
  RD_PARTY_URL: process.env.RD_PARTY_URL || ''
}

export default DEV
