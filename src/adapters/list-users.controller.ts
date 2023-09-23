import type Elysia from 'elysia'

import type { ListUsersUseCase } from '@/core/modules/user/usecases'

export class ListUsersController {
  constructor(readonly server: Elysia, readonly useCase: ListUsersUseCase) {
    server.get('/users', async () => {
      return useCase.execute()
    })
  }
}
