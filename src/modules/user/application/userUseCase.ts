import { UserRepository } from '../domain/user.repository'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
  // CRUD use cases
  constructor(private readonly userRepository: UserRepository) {}

  public async all() {
    const users = await this.userRepository.all()
    return users
  }
  public async list() {}
  public async view(id: number) {
    const user = await this.userRepository.view(id)
    return user
  }
  public async create({
    id,
    name,
    email,
    password,
    description,
    role
  }: {
    id: number
    name: string
    email: string
    password?: string
    description: string
    role: string
  }) {
    const userValue = new UserValue({ name, email, password, role, description })
    
    const userCreated = await this.userRepository.create(userValue)
    return userCreated
  }
  public async update(
    id,
    {
      name,
      email,
      password,
      description,
      role
    }: {
      id: number
      name: string
      email: string
      password?: string
      description: string
      role: string
    }
  ) {
    const userValue = new UserValue({ name, email, password, role, description })

    const userUpdated = await this.userRepository.update(id, userValue)
    return userUpdated
  }
  public async remove(id: number) {
    const exists = await this.userRepository.view(id)
    if (!exists) {
      throw new Error(`User with id ${id} not exists`)
    }
    const removedUser = await this.userRepository.remove(id)
    return removedUser
  }

  //*****************************

  public async findByEmail(email: number) {
    const user = await this.userRepository.findByEmail(email)
    return user
  }
}
