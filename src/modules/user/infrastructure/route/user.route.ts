import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.controller'
import { MockRepository } from '../repository/mock.repository'

import resource from '../../../../resources/baseRouteCRUDresource'

const userRoute = Router()
/**
 * Start Repository, here we can switch between ORMs with repositories
 */
const userRepo = new MockRepository()

/**
 * Use cases
 */
const userUseCase = new UserUseCase(userRepo)

/**
 * User controllers
 */

const userCtrl = new UserController(userUseCase)

/**
 *
 */
const prefix = 'user'
userRoute.use(`/${prefix}`, resource(userCtrl))

export default userRoute
