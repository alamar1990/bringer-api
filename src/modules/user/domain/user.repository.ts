import { UserEntity } from './user.entity'

export interface UserRepository extends CRUDInterface<UserEntity> {
  findByEmail(user: object): Promise<UserEntity | null>
}
