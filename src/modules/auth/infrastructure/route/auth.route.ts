import { Router } from 'express'

import { MockRepository } from '../../../user/infrastructure/repository/mock.repository'

import { AuthController } from '../controller/auth.controller'
import { AuthUseCase } from '../../application/authUseCase'

const authRoute = Router()

const userRepo = new MockRepository()

/**
 * Use cases
 */

const authUseCase = new AuthUseCase(userRepo)

/**
 * User controllers
 */
const authController = new AuthController(authUseCase)

authRoute.post('/auth/generate-token', authController.generateToken)

export default authRoute
