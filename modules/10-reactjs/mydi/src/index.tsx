import React from 'react'
import ReactDOM from 'react-dom'
import { Container, injectable, inject } from 'inversify'
import { TYPES } from './types'

const container = new Container()
container.bind(TYPES.GREETER).to(Greeter)

class Greeter {
  greet(): string {
    return 'Hello'
  }
}

@injectable()
class PersonalAssistant {
  constructor(@inject(TYPES.GREETER) private readonly greet: Greeter) {}
  service(nombre: string): string {
    return Greeter.greet() + `Mr|Ms <${nombre}>`
  }
}

function sayHello(): string {
  const hello = new Greeter()
  const assistance = new PersonalAssistant(hello)
  return assistance.service('Carlos')
}

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'))
