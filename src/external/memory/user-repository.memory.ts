import type { User } from '@/core/user/model'
import type { IUserRepository } from '@/core/user/repositories'

export class UserRepositoryMemory implements IUserRepository {
  private readonly users: User[] = []

  async retrieveByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null
  }

  async create(user: User): Promise<User> {
    this.users.push({ ...user, id: Math.random() })

    return user
  }

  async findAll(): Promise<User[] | []> {
    return this.users
  }
}
