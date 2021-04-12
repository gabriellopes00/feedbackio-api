import { UUIDGenerator } from '@/implementation/interfaces/uuid-generator'
import { v4 as UUIDv4 } from 'uuid'

export class IDGenerator implements UUIDGenerator {
  generate(): string {
    return UUIDv4()
  }
}
