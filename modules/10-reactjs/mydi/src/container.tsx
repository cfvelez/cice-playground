import { Container, injectable, inject } from 'inversify'
import { TYPES } from './types'

const container = new Container()
container.bind(TYPES.BAZ).to(Baz)
export { container }
