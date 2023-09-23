import type { UserModel } from '../model'

export interface IUserRepository {
  create(user: UserModel): Promise<UserModel>
  findAll(): Promise<UserModel[] | []>
  findByEmail(email: string): Promise<UserModel | null>
  findById(id: number): Promise<UserModel | null>
}
