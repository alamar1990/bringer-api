import { Configuration } from '../'

const PRO: Configuration = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: +(process.env.PORT || 3000),
  JWT_SECRET: process.env.JWT_SECRET || '',
  JWT_TOKEN_EXPIRATION: process.env.JWT_TOKEN_EXPIRATION || '1d',
  RD_PARTY_URL: process.env.RD_PARTY_URL || '',
  RD_PARTY_TOKEN: process.env.RD_PARTY_TOKEN || ''
}

export default PRO
