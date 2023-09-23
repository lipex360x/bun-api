import type Elysia from 'elysia'

import type { RetrieveUserUseCase } from '@/core/user/usecases'

export class RetrieveUserController {
  constructor(readonly server: Elysia, readonly useCase: RetrieveUserUseCase) {
    server.get('/user/:id', async ({ params }) => {
      const { id } = params

      if (!id) throw new Error('params is required')

      return useCase.execute(+id)
    })
  }
}
