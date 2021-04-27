import { UserParams } from '@/domain/usecases/user/add-user'
import { InvalidParamError } from '../errors/invalid-param-error'
import { Validator } from '../ports/validator'

export class UserValidator implements Validator {
  private validateName(name: string): boolean {
    if (!name || name.trim().length <= 2 || name.trim().length > 255) return false
    return true
  }

  private validateEmail(email: string): boolean {
    const pattern = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!email || email.length > 256 || !pattern.test(email)) return false

    const [account, address] = email.split('@')
    if (account.length > 64) return false

    const domain = address.split('.')
    if (domain.some(part => part.length > 63)) return false

    return true
  }

  private validatePassword(pass: string): boolean {
    return pass?.length >= 4
  }

  validate(data: UserParams): Error {
    if (!this.validateName(data.name)) return new InvalidParamError('name')
    if (!this.validateEmail(data.email)) return new InvalidParamError('email')
    if (!this.validatePassword(data.password)) return new InvalidParamError('password')
    return null
  }
}
