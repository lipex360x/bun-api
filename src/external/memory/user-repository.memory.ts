import type { UserModel } from '@/core/modules/user/model'
import type { IUserRepository } from '@/core/modules/user/repositories'

export class UserRepositoryMemory implements IUserRepository {
  private readonly users: UserModel[] = []

  async findByEmail(email: string): Promise<UserModel | null> {
    return this.users.find((user) => user.email === email) ?? null
  }

  async findById(id: number): Promise<UserModel | null> {
    return this.users.find((user) => user.id === id) ?? null
  }

  async create(user: UserModel): Promise<UserModel> {
    const id = Math.floor(Math.random() * 100)

    Object.assign(user, { id })

    this.users.push(user)

    return user
  }

  async findAll(): Promise<UserModel[] | []> {
    return this.users
  }
}
