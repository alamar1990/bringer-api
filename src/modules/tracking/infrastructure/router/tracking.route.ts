import { Router } from 'express'
import { TrackingUseCase } from '../../application/trackingUseCase'
import { TrackingController } from '../controller/tracking.controller'

const trackingRoutes = Router()

/**
 * Use cases
 */

const trackingUseCase = new TrackingUseCase()

/**
 * Tracking controllers
 */
const trackingController = new TrackingController(trackingUseCase)

trackingRoutes.get('/tracking-parcel', trackingController.trackingParcel)

export default trackingRoutes
