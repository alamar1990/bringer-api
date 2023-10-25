import { Request, Response } from 'express'
import { AuthUseCase } from '../../application/authUseCase'

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {
    this.generateToken = this.generateToken.bind(this)
  }
  async generateToken({ body }: Request, res: Response) {
    try {
      const { email, password } = body
      const jwtToken = await this.authUseCase.getJwtToken({ email, password })
      return res.json({ message: `You're logged in... Welcome Back!`, token: jwtToken })
    } catch (e) {
      console.error(e)
      return res.status(500).send({
        message: `[CONTROLLER ERROR] ${e}`
      })
    }
  }
  
}
