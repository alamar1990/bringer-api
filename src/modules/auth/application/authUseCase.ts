import { UserRepository } from '../../user/domain/user.repository'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../../../config'
import { UserUseCase } from '../../user/application/userUseCase'

export class AuthUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async getJwtToken({ email, password }: { email: string; password: string }) {
    try {
      const userWithEmail = await new UserUseCase(this.userRepository).findByEmail(email)

      if (!userWithEmail) {
        throw new Error(`Email or password does not match!`)
      }
      const match = await compare(password, userWithEmail.password)
      if (!match) {
        throw new Error(`Email or password does not match!`)
      }
      const accessToken = jwt.sign({ id: userWithEmail.id }, config.JWT_SECRET, {
        expiresIn: config.JWT_TOKEN_EXPIRATION
      })
      if (!accessToken) {
        throw new Error(`Error generating a token`)
      }
      return accessToken
    } catch (e) {
      throw e
    }
  }
}
