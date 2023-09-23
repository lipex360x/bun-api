import type { User } from '../model'

export interface IUserRepository {
  retrieveByEmail(email: string): Promise<User | null>
  create(user: User): Promise<User>
}
