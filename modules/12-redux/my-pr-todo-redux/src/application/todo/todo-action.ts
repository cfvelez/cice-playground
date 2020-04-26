import { Todo } from '../../domain/todo'

type CreateTodoPayload = Pick<Todo, 'id' | 'text'>

export interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: CreateTodoPayload
}

export interface DeleteTodoAction {
  type: 'DELETE_TODO'
  payload: { id: number }
}

export interface ToggleTodoAction {
  type: 'TOGGLE_TODO'
  payload: { id: number }
}

export const createTodo = (payload: CreateTodoPayload): CreateTodoAction => {
  return {
    type: 'CREATE_TODO',
    payload
  }
}

export const toggleTodo = (payload: { id: number }): ToggleTodoAction => {
  return {
    type: 'TOGGLE_TODO',
    payload
  }
}

export const deleteTodo = (payload: { id: number }): DeleteTodoAction => {
  return {
    type: 'DELETE_TODO',
    payload
  }
}

export type TodoAction = CreateTodoAction | DeleteTodoAction | ToggleTodoAction
