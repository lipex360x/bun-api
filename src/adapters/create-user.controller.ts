import type Elysia from 'elysia'

import type { CreateUserUseCase } from '@/core/modules/user/usecases'

export class CreateUserController {
  constructor(readonly server: Elysia, readonly useCase: CreateUserUseCase) {
    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as any

      await useCase.execute({ name, email, password })

      return {
        staus: 201,
        body: {
          message: 'user created',
        },
      }
    })
  }
}
