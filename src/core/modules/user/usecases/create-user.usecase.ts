import type { CreateUserProps, IUseCase } from '@/core/shared'

import type { UserModel } from '../model'
import type { IUserRepository } from '../repositories'

export class CreateUserUseCase implements IUseCase<CreateUserProps, UserModel> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(input: CreateUserProps) {
    const { name, email, password } = input

    const retrieveUser = await this.repository.findByEmail(email)

    if (retrieveUser) {
      throw new Error('user is already registered')
    }

    return this.repository.create({ name, email, password })
  }
}
