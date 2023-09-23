import type { IUseCase } from '@/core/shared'

import type { IUserRepository } from '../repositories'

type CreateUserProps = {
  name: string
  email: string
  password: string
}

export class RegisterUserUseCase implements IUseCase<CreateUserProps, void> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(input: CreateUserProps): Promise<void> {
    const { name, email, password } = input

    const retrieveUser = await this.repository.findByEmail(email)

    if (retrieveUser) {
      throw new Error('user is already registered')
    }

    await this.repository.create({ name, email, password })
  }
}
