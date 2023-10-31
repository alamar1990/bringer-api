import { Router } from 'express'
import { TrackingUseCase } from '../../application/trackingUseCase'
import { TrackingController } from '../controller/tracking.controller'
import { authenticate } from '../../../auth/infrastructure/middleware'

const trackingRoutes = Router()

/**
 * Use cases
 */

const trackingUseCase = new TrackingUseCase()

/**
 * Tracking controllers
 */
const trackingController = new TrackingController(trackingUseCase)

trackingRoutes.get('/tracking-parcel', authenticate, trackingController.trackingParcel)

export default trackingRoutes
