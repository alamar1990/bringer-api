import { UserRepository } from '../../domain/user.repository'
import MOCK_USER from './mockUser'
import { hash } from 'bcrypt'

/**
 * MOCK user from data
 */

export class MockRepository implements UserRepository {
  async all(): Promise<MockInterface[]> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users
  }

  async create(userIn: MockRepository): Promise<MockRepository> {
    const hashedPassword = await hash(userIn.password, 10)
    MOCK_USER = { ...userIn, password: hashedPassword }
    return MOCK_USER
  }

  async view(id): Promise<MockRepository> {
    return MOCK_USER
  }

  async update(id: number, userIn: MockRepository): Promise<MockRepository> {
    const hashedPassword = await hash(userIn.password, 10)
    MOCK_USER = { ...userIn, password: hashedPassword }
    return MOCK_USER
  }

  async remove(id): Promise<MockRepository> {
    MOCK_USER = {}
    return MOCK_USER
  }

  //***** Non - base methods

  async findByEmail(email): Promise<UserEntity> {
    return MOCK_USER
  }
}
