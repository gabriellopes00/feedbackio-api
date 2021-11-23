import { Either, left, right } from '@/shared/either'
import { Encrypter } from '@/usecases/ports/encrypter'
import { Account } from '../domain/entities/account'
import { AuthAccount, AuthAccountErrors } from '../domain/usecases/auth-account'
import { InvalidAccessToken } from '../domain/usecases/errors/invalid-access-token'
import { LoadAccountRepository } from '../repositories/load-account-repository'

export interface AccessTokenPayload {
  id: string
  name: string
  email: string
}

export class DbAuthAccount implements AuthAccount {
  constructor(
    private readonly encrypter: Encrypter,
    private readonly repository: LoadAccountRepository
  ) {}

  public async auth(token: string): Promise<Either<AuthAccountErrors, Account>> {
    const payload = await this.encrypter.decrypt<AccessTokenPayload>(token)
    if (!payload) return left(new InvalidAccessToken(token))

    const account = await this.repository.findById(payload.id)
    return right(account)
  }
}
