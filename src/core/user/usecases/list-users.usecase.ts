import type { IUseCase } from '@/core/shared'

import type { UserModel } from '../model'
import type { IUserRepository } from '../repositories'

export class ListUsersUseCase implements IUseCase<void, UserModel[]> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<UserModel[]> {
    return this.userRepository.findAll()
  }
}
