import type { User } from '../model'

export interface IUserRepository {
  create(user: User): Promise<User>
  retrieveByEmail(email: string): Promise<User | null>
  findAll(): Promise<User[] | []>
}
