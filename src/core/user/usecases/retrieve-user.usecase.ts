import type { IUseCase } from '@/core/shared'

import type { UserModel } from '../model'
import type { IUserRepository } from '../repositories'

export class RetrieveUserUseCase implements IUseCase<number, UserModel | null> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(id: number): Promise<UserModel | null> {
    const retrieveUser = await this.repository.findById(id)

    if (!retrieveUser) {
      throw new Error('user not found')
    }

    return retrieveUser
  }
}
