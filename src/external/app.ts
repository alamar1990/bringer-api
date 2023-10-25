import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import '../modules/auth/infrastructure/passport'
import userRoute from '../modules/user/infrastructure/route/user.route'
import authRoute from '../modules/auth/infrastructure/route/auth.route'
import trackingRoutes from '../modules/tracking/infrastructure/router/tracking.route'

const app = express()

app.disable('x-powered-by')

// @ts-ignore
const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: true
}

app.use(express.json())
app.use(cors())

app.use(helmet()) // HTTP Headers Security

// User routes
app.use(userRoute)

// Auth routes
app.use(authRoute)

// Auth routes
app.use(trackingRoutes)

// Test route to /
app.get('/', (_req, res) => {
  res.send({ message: 'Bringer API started' })
})

export { app }
