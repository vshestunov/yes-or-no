import { EntityStatus } from '../enums'

export interface EntityState<T> {
    value: T
    status: EntityStatus
}
