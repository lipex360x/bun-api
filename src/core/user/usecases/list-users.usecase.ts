import type { UseCase } from '@/core/shared'

import type { User } from '../model'
import type { IUserRepository } from '../repositories'

export class ListUsersUseCase implements UseCase<void, User[]> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll()
  }
}
