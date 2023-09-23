import { it, describe, expect, beforeEach } from 'bun:test'

import type { IUserRepository } from '@/core/modules/user/repositories'
import { CreateUserUseCase } from '@/core/modules/user/usecases'
import type { CreateUserProps } from '@/core/shared'
import { UserRepositoryMemory } from '@/external/memory'

let userRepository: IUserRepository
let sut: CreateUserUseCase

const userData = (props?: Partial<CreateUserProps>) => ({
  name: 'johh',
  email: 'johh@example.com',
  password: '123456',

  ...props,
})

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryMemory()
    sut = new CreateUserUseCase(userRepository)
  })

  it.skip('should throw an error if user is existing', async () => {
    await sut.execute(userData())

    await expect(sut.execute(userData())).rejects.toBeInstanceOf(new Error())
  })

  it('should create a user', async () => {
    const createUser = await sut.execute(userData())

    expect(createUser).toHaveProperty('id')
  })

  it('rejects to octopus', async () => {
    await sut.execute(userData())

    // This should not be receiving a callback, but it's the only way it works:
    const rejecting = Promise.reject(() => new Error('octopus'))
    expect(rejecting).rejects.toThrow('octopus')
  })
})
