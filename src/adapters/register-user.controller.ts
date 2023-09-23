import type Elysia from 'elysia'

import type { RegisterUserUseCase } from '@/core/user/usecases'

export class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: RegisterUserUseCase) {
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
